import { combinedPalette, palette } from '../theme/palette';

// Application constants
export const DISPLAY_NAME = 'Kate Sprague';
export const APP_TITLE = 'Kate Sprague - Portfolio';
export const APP_GREETING = 'Welcome to my portfolio! 👋';
export const APP_BUTTON_TEXT = 'Click here to learn more about Kate!';
export const APP_DESCRIPTION = 'Welcome to my GitHub Pages Portfolio.';
export const APP_SUBTEXT =
  'This is a React app with TypeScript and Material UI hosted on GitHub Pages.';
export const ABOUT_BIO = [
  'Kate Sprague is a Full-Stack Software Engineer local to the Seattle, Washington area. She has earned a Bachelor of Science from the University of Washington school of Computer Science in Bothell. She combines a strong technical foundation in full-stack development with a background in design, security, and user experience testing.',
  'Her work centers on building modern, full-stack web applications that are secure, scalable, and intuitive from the ground up. She brings hands-on expertise across React, TypeScript, JavaScript, Python, Java, C#, C++, and cloud-based technologies, always with an eye toward creating software that is maintainable, accessible, and genuinely user-centered.',
  "As a researcher with the University of Washington's Intelligent Networks Laboratory, Kate contributed to the BrainGrid academic software ecosystem by evaluating and integrating software engineering tools and development workflows to improve software quality, maintainability, collaboration, and long-term sustainability for scientific research applications.",
  'This website was built with code Kate wrote. You can review and fork the project on GitHub Pages.',
];

export const PROFESSIONAL_SUMMARY: Array<{ heading: string; body: string }> = [
  {
    heading: 'Senior Full-Stack Software Engineer',
    body: 'who combines a strong classical backend-leaning Computer Science foundation, self-taught fronend-leaning expertise, deep AI research expertise, a passion for Security and background in Digital Media Arts to build robust, intuitive, user-centered, secure, and scalable AI-enabled web applications. Experienced in developing modern single-page applications using React, TypeScript, Java, Python, and .NET, delivering production-ready solutions across diverse industries with unique technical and business requirements.',
  },
  {
    heading: 'Proven track record, diverse product experience',
    body: 'in building and deploying greenfield production-grade AI systems, including Computer Vision enabled mobile apps, Agentic AI workflows, CNNs, auto-encoders to solve critical problems in health-tech and e-commerce.',
  },
  {
    heading: 'Experienced in designing and leading development of APIs',
    body: 'for multi-region, highly available solutions, while prioritizing security for both RESTful and GraphQL APIs with scalable data storage warehousing.',
  },
  {
    heading: 'Proficient in software architecture for cloud platforms',
    body: '(AWS, Google Cloud, Microsoft Azure) with hands-on experience in Compute, Networking, Containers, CDNs, Storage, and Serverless.',
  },
  {
    heading: 'Specialist in frontend application development',
    body: 'using HTML, CSS, Tailwind CSS, JavaScript, TypeScript, NodeJS, and major Frameworks like React, Redux, and React Native. Adept at using Tailwind CSS, Vite, and Webpack for efficient front-end build optimization.',
  },
];

export const CONTACT_INQUIRY_URL = '';
export const CONTACT_EMAIL_URL = 'mailto:kcodes.sde@gmail.com';
export const CONTACT_LINKEDIN_URL = 'https://www.linkedin.com/in/kate-codes/';
export const CONTACT_GITHUB_URL = 'https://github.com/kate-codes';

export const RESUME_HEADLINE = 'Product Engineer | Full Stack | AI Systems | Human-Centered Design';
export const RESUME_AVAILABILITY =
  'Local to Seattle, Available for Hybrid, Relocation, or Remote Work';
export const RESUME_TAGLINE = 'Building software that users love and teams can scale with.';

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'University of Washington',
  location: 'Bothell, WA',
  graduated: 'June 2018',
};

export interface SkillCategory {
  key: string;
  label: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: 'software',
    label: 'Software Proficiencies',
    skills: [
      'C#',
      'C++',
      'Python',
      'Java',
      'HTML5',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React',
      'React Native',
      'MySQL',
      'NoSQL',
      'SQL',
      'Docker',
      'Flask',
      'x86 Assembly',
    ],
  },
  {
    key: 'ml',
    label: 'Machine Learning',
    skills: [
      'TensorFlow',
      'TensorBoard',
      'Keras',
      'MATLAB',
      'Jupyter Notebook',
      'OpenCV',
      'Scikit-Image',
      'Supervisely',
      'OpenMMLab',
    ],
  },
  {
    key: 'devtools',
    label: 'Development Tools',
    skills: [
      'Git',
      'Splunk',
      'Postman',
      'Visual Studio',
      'VS Code',
      'IntelliJ',
      'Jenkins',
      'Cypress',
      'Jest',
      'Grafana',
      'Bootstrap',
    ],
  },
  {
    key: 'workflow',
    label: 'Workflow Tools',
    skills: [
      'Jira',
      'Trello',
      'Miro',
      'Figma',
      'Confluence',
      'LucidChart',
      'LucidSpark',
      'Mermaid.js',
      'TestFairy',
      'PlantUML',
      'Adobe XD',
      'Adobe Illustrator',
      'CorelDRAW',
      'GIMP',
    ],
  },
  {
    key: 'design',
    label: 'Manufacturing & Design',
    skills: [
      'Autodesk Maya',
      '3ds Max',
      'After Effects',
      'Photoshop',
      'Premiere Pro',
      'AutoCAD',
      'Unity',
      'Unreal',
      'Fusion 360',
      'GCode',
      'CNC',
    ],
  },
  {
    key: 'os',
    label: 'Operating Systems',
    skills: ['Windows', 'Linux', 'Mac OS'],
  },
  {
    key: 'general',
    label: 'General Skills',
    skills: [
      'Communication',
      'Problem-Solving',
      'Team Leadership',
      'Project Management',
      'Visual Design',
      'UX/UI Prototyping',
      'UX Design',
      'Developing Securely',
    ],
  },
  {
    key: 'languages',
    label: 'Language Proficiencies',
    skills: ['English (Native)', 'Spanish (Professional)', 'Japanese (N5, studying)'],
  },
];

export interface ColorTheme {
  gradientPrimary: string;
  gradientSecondary: string;
  websiteBackground: string;
  defaultText: string;
  linkColor: string;
  cardHeadingText: string;
  cardAccentBorder: string; // Top border for cards
  headerBackground: string;
  headerText: string;
  headerAccent: string;
  footerBackground: string;
  footerText: string;
  footerHover: string;
  backButtonColor: string;
  paperBackground: string;
  resumeHeadingText: string;
  resumeSubheadingText: string;
  resumeBodyText: string;
  resumeMutedText: string;
  resumeAccent: string;
}

export const LIGHT_MODE_COLORS: ColorTheme = {
  gradientPrimary: palette.colors.linen.hex,
  gradientSecondary: palette.colors.floralWhite.hex,
  websiteBackground: palette.colors.floralWhite.hex,
  defaultText: palette.colors.black.hex,
  linkColor: palette.colors.ashBrown.hex,
  cardHeadingText: palette.colors.ashBrown.hex,
  cardAccentBorder: palette.colors.rosyTaupe.hex,
  headerBackground: palette.colors.rosyTaupe.hex,
  headerText: palette.colors.floralWhite.hex,
  headerAccent: palette.colors.rosyTaupe.hex,
  footerBackground: palette.colors.rosyTaupe.hex,
  footerText: palette.colors.floralWhite.hex,
  footerHover: palette.colors.rosyTaupe.hex,
  backButtonColor: palette.colors.ashBrown.hex,
  paperBackground: palette.colors.white.hex,
  resumeHeadingText: palette.colors.ashBrown.hex,
  resumeSubheadingText: palette.colors.dustyRose.hex,
  resumeBodyText: palette.colors.black.hex,
  resumeMutedText: palette.colors.smokyRose.hex,
  resumeAccent: palette.colors.rosyTaupe.hex,
};

export const DARK_MODE_COLORS: ColorTheme = {
  gradientPrimary: combinedPalette.colors.midnightNavy.hex,
  gradientSecondary: combinedPalette.colors.deepNavy.hex,
  websiteBackground: combinedPalette.colors.black.hex,
  defaultText: combinedPalette.colors.neutralCream.hex,
  linkColor: combinedPalette.colors.floralWhite.hex,
  cardHeadingText: combinedPalette.colors.neutralCream.hex,
  cardAccentBorder: combinedPalette.colors.stoneTaupe.hex,
  headerBackground: combinedPalette.colors.deepNavy.hex,
  headerText: combinedPalette.colors.neutralCream.hex,
  headerAccent: combinedPalette.colors.parchment.hex,
  footerBackground: combinedPalette.colors.black.hex,
  footerText: combinedPalette.colors.neutralCream.hex,
  footerHover: combinedPalette.colors.stoneTaupe.hex,
  backButtonColor: combinedPalette.colors.parchment.hex,
  paperBackground: combinedPalette.colors.deepNavy.hex,
  resumeHeadingText: combinedPalette.colors.neutralCream.hex,
  resumeSubheadingText: combinedPalette.colors.parchment.hex,
  resumeBodyText: combinedPalette.colors.neutralCream.hex,
  resumeMutedText: combinedPalette.colors.stoneTaupe.hex,
  resumeAccent: combinedPalette.colors.mutedOlive.hex,
};
