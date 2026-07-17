import { palette } from '../theme/palette';

// Application constants
export const DISPLAY_NAME = 'Kate Sprague';
export const APP_TITLE = 'Kate Sprague - Portfolio';
export const APP_GREETING = 'Welcome to my portfolio! 👋';
export const APP_BUTTON_TEXT = 'Click Me!';
export const APP_DESCRIPTION = 'Welcome to my GitHub Pages Portfolio.';
export const APP_SUBTEXT =
  'This is a React app with TypeScript and Material UI hosted on GitHub Pages.';
export const ABOUT_BIO = [
  'Kate Sprague is a Full-Stack Software Engineer and University of Washington Computer Science graduate. She combines a strong technical foundation in full-stack development with a background in design, security, and user experience.to build secure, scalable, and intuitive web applications.',
  'She specializes in developing modern full-stack solutions using React, TypeScript, JavaScript, Python, Java, C#, C++, and cloud-based technologies, with a focus on creating maintainable, accessible, and user-centered software.',
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
    heading:
      'Experienced in designing and leading development of multi-region, highly available API solutions',
    body: 'for secure RESTful and GraphQL APIs with scalable data storage warehousing.',
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
  linkColor: palette.colors.forbiddenPassion.hex,
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
  resumeSubheadingText: palette.colors.forbiddenPassion.hex,
  resumeBodyText: palette.colors.black.hex,
  resumeMutedText: palette.colors.smokyRose.hex,
  resumeAccent: palette.colors.rosyTaupe.hex,
};

export const DARK_MODE_COLORS: ColorTheme = {
  gradientPrimary: palette.colors.forbiddenPassion.hex,
  gradientSecondary: palette.colors.forbiddenPassion.hex,
  websiteBackground: palette.colors.black.hex,
  defaultText: palette.colors.floralWhite.hex,
  linkColor: palette.colors.rosyTaupe.hex,
  cardHeadingText: palette.colors.linen.hex,
  cardAccentBorder: palette.colors.dustyRose.hex,
  headerBackground: palette.colors.smokyRose.hex,
  headerText: palette.colors.floralWhite.hex,
  headerAccent: palette.colors.rosyTaupe.hex,
  footerBackground: palette.colors.black.hex,
  footerText: palette.colors.floralWhite.hex,
  footerHover: palette.colors.forbiddenPassion.hex,
  backButtonColor: palette.colors.linen.hex,
  paperBackground: palette.colors.ashBrown.hex,
  resumeHeadingText: palette.colors.linen.hex,
  resumeSubheadingText: palette.colors.rosyTaupe.hex,
  resumeBodyText: palette.colors.floralWhite.hex,
  resumeMutedText: palette.colors.dustyRose.hex,
  resumeAccent: palette.colors.forbiddenPassion.hex,
};
