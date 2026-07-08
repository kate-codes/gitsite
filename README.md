# Hello World - React + GitHub Pages

A simple hello world React app hosted on GitHub Pages. 

See https://kate-codes.github.io/Gitsite-Example/ for example of what this looks like forked.


With deployer GHA!* (*repo must be public for it to run free, and is not configured for this repo as it is an example.)


There is also a pre-commit hook to prevent less experienced... or slightly more experienced but exhausted engineers from shooting themselves in the foot and accidentally commiting secrets in cleartext ([see Privacy Scan script](./scripts/privacy-scan.js)). 

A non-exhaustive list of secrets scanned for:

- AWS access/secret keys
- Google API + OAuth keys
- Azure tokens and storage keys
- GitHub PATs
- GitHub Tokens
- Stripe keys
- JWTs
- SSH/private key blocks
- MongoDB URIs
- password assignments

Created with :heart: by Kate Sprague

![Kate Sprague %C2%A9 All Rights Reserved](https://img.shields.io/badge/license-Kate%20Sprague%20%C2%A9%20All%20Rights%20Reserved-pink)

**Recommended VSCode Markdown Viewer:**  [Techopolis.markdown-live-preview](https://marketplace.visualstudio.com/items?itemName=Techopolis.markdown-live-preview) The only thing it seems not to support is emojis. :laughing:

# Local Setup
Assuming you have rudamentary Node and NPM experience.

Before deploying, install dependencies:
```bash
npm install
```

## Development

To run the app locally:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

# How to Deploy to GitHub Pages
After first time setup this _should_ be automated by the GitHub Action (GHA). However, you'll need to set up a [Github Repository Secret](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets#creating-secrets-for-a-repository) for that script to work:  
```
${{ secrets.GITHUB_TOKEN }}
```

### Step 1: Create a Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name your repository: **`username.github.io`** (replace `username` with your GitHub username)
4. Set it to **Public**
5. Click **Create repository**

Or in `gh` CLI you can use the following (without the asterisks): 
```js
gh repo create **Your_New_Repository_Name** --public --source=. --push
```

_Note: you can set this to --private as well and later make it public. Additionally, if you forget to remove the asterisks you get a repository name like: -gitsite-example-_

### Step 2: Update Configuration
1. Open `package.json` and update the `homepage` field:
```json
"homepage": "https://username.github.io"
```
Replace `username` with your GitHub username.

2. If deploying to a project repository instead (not `username.github.io`), update:
```json
"homepage": "https://username.github.io/repository-name"
``` 

Additionally in the `vite.config` file update `base` from the following to your actual repo name: 
```json
base: '/your-repo-name/',
```


### Step 3: Initialize Git & Push
```bash
git init
git add .
git commit -m "Initial commit: Hello World React app"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### Step 4: Deploy with gh-pages from local
```bash
npm run deploy
```

This command builds the React app and automatically pushes the build to GitHub Pages.

### Step 5: Access Your Site
Your website will be live at: `https://username.github.io`

It may take a minute or two to appear. If you see a 404 error, wait a bit and refresh.

### (Optional) Step 6: Modify and Manage

#### For the GHA to work you may need to modify 

- For each of the following you can refer to the branch `example-branch` https://github.com/kate-codes/Gitsite-Example/tree/example-branch to review how I set it up for my own example site for this repo at: https://kate-codes.github.io/Gitsite-Example/
- Your configuration for `homepage` placeholder may need to be updated — package.json will error out at https://username.github.io instead of your actual URL https://github.com/{your-username}/{repo-name}/github.io
- Your configuration for `base` in `vite.config.ts` may need modification — since this is a project repo (gitsite-example), not a username.github.io repo, assets will 404 with base: '/'. It needs the repo name as the subpath.

#### You may need to enable GitHub Pages in the repo settings
Goto --> https://github.com/{your-username}/Gitsite-Example/settings/pages

Set Source → "Deploy from a branch" → Branch: gh-pages → folder: / (root) → Save.

Then re-run npm run deploy to rebuild with the correct base path and push fresh content to gh-pages.

After that, the site should appear at https://{your-username}.github.io/Gitsite-Example/ within a minute or two. 


## Project Structure

- **public/** - Static files and entry HTML
- **src/** - React components
  - `App.tsx` - Main React component
  - `index.tsx` - React entry point
  - `App.css` - Component styling
  - `index.css` - Global styling
- **package.json** - Dependencies and scripts
- **vite.config.ts** - Vite build configuration

See detailed project [project architecture](./PROJECT_STRUCTURE.md) for more technical resources.

## Customization

Edit `src/App.tsx` to change the content and `src/App.css` to modify the appearance. After changes:
```bash
npm run deploy
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run privacy-scan` - Scan for tokens and secrets added accidentally manually (not just pre-commit / push)

## Learn More
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)