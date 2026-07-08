const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MAX_FILE_SIZE = 1024 * 1024; // 1 MB
const TEXT_FILE_EXTENSIONS = [
    '.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.scss', '.json', '.md', '.markdown', '.yml', '.yaml', '.env', '.txt', '.svg', '.xml', '.ini', '.toml', '.gitignore', '.gitattributes'
];

const PATTERNS = [
    {
        name: 'Email address',
        regex: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
    },
    {
        name: 'AWS access key ID',
        regex: /\b(?:AKIA|ASIA|AIDA|AGPA|APKA|AROA)[0-9A-Z]{16}\b/g,
    },
    {
        name: 'AWS secret access key',
        regex: /\b(?<![A-Za-z0-9+/=])[A-Za-z0-9/+=]{40}(?![A-Za-z0-9+/=])\b/g,
    },
    {
        name: 'Google API key',
        regex: /\bAIza[0-9A-Za-z_-]{35}\b/g,
    },
    {
        name: 'Google OAuth token',
        regex: /\bya29\.[0-9A-Za-z\._-]+\b/g,
    },
    {
        name: 'GitHub token',
        regex: /\bgh[pousra]_[0-9A-Za-z_]{36,255}\b/g,
    },
    {
        name: 'GitHub fine-grained PAT',
        regex: /\bgithub_pat_[0-9A-Za-z_]{36,255}\b/g,
    },
    {
        name: 'Slack token',
        regex: /\bxox[baprs]-[0-9A-Za-z]{10,}\b/g,
    },
    {
        name: 'Stripe secret key',
        regex: /\bsk_(live|test)_[0-9a-zA-Z]{24,}\b/g,
    },
    {
        name: 'Stripe publishable key',
        regex: /\bpk_(live|test)_[0-9a-zA-Z]{24,}\b/g,
    },
    {
        name: 'Azure storage account key',
        regex: /AccountKey=[A-Za-z0-9+/=]{40,}/g,
    },
    {
        name: 'Azure OAuth token',
        regex: /\bbearer [A-Za-z0-9\-\._~\+/]+=*\b/gi,
    },
    {
        name: 'JWT token',
        regex: /\beyJ[A-Za-z0-9_-]{10,}\.([A-Za-z0-9_-]{10,})\.([A-Za-z0-9_-]{10,})\b/g,
    },
    {
        name: 'Private key block',
        regex: /-----BEGIN (?:RSA |DSA |EC |OPENSSH )?PRIVATE KEY-----/g,
    },
    {
        name: 'SSH public key',
        regex: /ssh-(rsa|dss|ed25519|ecdsa) [A-Za-z0-9+/]+=*/g,
    },
    {
        name: 'MongoDB connection string',
        regex: /mongodb(?:\+srv)?:\/\/[^\s]+/gi,
    },
    {
        // This pattern is a generic catch-all for long alphanumeric strings that could be secrets.
        // It may produce false positives, so use with caution.
        name: 'Potential generic secret token',
        regex: /\b(?:[A-Za-z0-9_-]{32,})\b/g,
    },
    {
        name: 'Password assignment',
        regex: /\b(?:password|passwd|pwd)\s*[:=]\s*[^\s'"`]{8,}\b/gi,
    },
];

function isTextFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (TEXT_FILE_EXTENSIONS.includes(ext)) {
        return true;
    }
    const name = path.basename(filePath).toLowerCase();
    if (name === 'package.json' || name === 'package-lock.json' || name === 'yarn.lock') {
        return true;
    }
    return false;
}

function isBinary(buffer) {
    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        if (byte === 0) {
            return true;
        }
    }
    return false;
}

function readStagedFiles() {
    try {
        const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
            encoding: 'utf8',
            stdio: ['pipe', 'pipe', 'ignore'],
        }).trim();
        if (!output) {
            return [];
        }
        return output.split(/\r?\n/).map((file) => file.trim()).filter(Boolean);
    } catch (error) {
        return [];
    }
}

function collectFiles() {
    const staged = readStagedFiles();
    const files = new Set(staged);

    if (fs.existsSync('dist')) {
        const walk = (directory) => {
            const entries = fs.readdirSync(directory, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = path.join(directory, entry.name);
                if (entry.isDirectory()) {
                    walk(fullPath);
                } else {
                    files.add(fullPath);
                }
            }
        };
        walk('dist');
    }

    return Array.from(files);
}

function getMarkdownUrlRanges(content) {
    const ranges = [];
    const markdownLinkRegex = /!?\[[^\]]*\]\(([^)]*)\)/g;
    let match;
    while ((match = markdownLinkRegex.exec(content)) !== null) {
        const urlStart = match.index + match[0].indexOf('](') + 2;
        const urlEnd = match.index + match[0].length - 1;
        ranges.push([urlStart, urlEnd]);
    }
    return ranges;
}

function scanFile(filePath) {
    if (path.basename(filePath) === 'package-lock.json') return [];

    const stats = fs.statSync(filePath);
    if (stats.size === 0 || stats.size > MAX_FILE_SIZE) {
        return [];
    }

    if (!isTextFile(filePath)) {
        const buffer = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
        if (isBinary(Buffer.from(buffer))) {
            return [];
        }
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const violations = [];

    const ext = path.extname(filePath).toLowerCase();
    const isMarkdown = ext === '.md' || ext === '.markdown';
    const markdownUrlRanges = isMarkdown ? getMarkdownUrlRanges(content) : [];

    for (const pattern of PATTERNS) {
        const matches = [...content.matchAll(pattern.regex)];
        for (const match of matches) {
            if (!match[0]) continue;
            if (markdownUrlRanges.some(([start, end]) => match.index >= start && match.index < end)) continue;
            violations.push({
                filePath,
                pattern: pattern.name,
                match: match[0],
            });
        }
    }

    return violations;
}

function main() {
    const root = process.cwd();
    const files = collectFiles();
    const violations = [];

    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        if (fs.lstatSync(file).isDirectory()) continue;
        violations.push(...scanFile(file));
    }

    if (violations.length === 0) {
        console.log('✅ Privacy scan passed. No email addresses or common secret formats detected.');
        return;
    }

    console.error('🚨 Privacy scan found potential issues:');
    for (const issue of violations) {
        console.error(`- ${issue.filePath}: ${issue.pattern} → ${issue.match}`);
    }
    console.error('\nIf these matches are false positives, review the scan patterns in scripts/privacy-scan.js.');
    process.exit(1);
}

main();
