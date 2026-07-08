// README: Project Structure
// 
// This project follows modern React and TypeScript best practices:
//
// src/
// ├── components/          - Reusable React components
// │   └── HelloWorldCard.tsx
// ├── hooks/               - Custom React hooks
// │   └── useHelloWorldClick.ts
// ├── types/               - TypeScript type definitions (.ts)
// │   └── index.ts
// ├── constants/           - Application constants (.ts)
// │   └── index.ts
// ├── theme/               - Material UI theme configuration (.ts)
// │   └── theme.ts
// ├── styles/              - CSS stylesheets
// │   ├── App.css
// │   └── index.css
// ├── App.tsx              - Main App component
// └── index.tsx            - React entry point
//
// Configuration:
// ├── tsconfig.json        - TypeScript configuration
// ├── vite.config.ts       - Vite build configuration
// └── package.json         - Dependencies and scripts
//
// Key Patterns:
// - Components use React.FC<Props> for type safety
// - Custom hooks encapsulate stateful logic
// - Constants prevent magic strings
// - Types separated in dedicated files
// - Theme centralized in Material UI theme
// - CSS moved to styles/ folder for organization
