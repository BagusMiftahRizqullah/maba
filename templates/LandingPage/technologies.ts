export type Technology = {
  name: string;
  description: string;
  links: Array<{
    title: string;
    url: string;
  }>;
};
export const technologies: Technology[] = [
  {
    name: "Next.js",
    description:
      "Next.js is the leading framework in the React ecosystem, featuring server-side rendering and static site generation among other rendering techniques. Utilizing its file-based routing architecture and its zero-config design principle, it is designed to enhance both the user and developer experience.",
    links: [
      {
        title: "Website",
        url: "https://nextjs.org/",
      },
      {
        title: "Docs",
        url: "https://nextjs.org/docs",
      },
      {
        title: "Learn Next.js",
        url: "https://nextjs.org/learn",
      },
      {
        title: "GitHub",
        url: "https://github.com/vercel/next.js",
      },
      {
        title: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Next.js",
      },
    ],
  },
  {
    name: "React",
    description:
      "React is a JavaScript library for building declarative and flexible user interfaces in a functional paradigm. Being the most popular front-end library in the world, it enables developers to create reusable UI components that can be composed to build complex web applications.",
    links: [
      {
        title: "Website",
        url: "https://reactjs.org/",
      },
      {
        title: "Docs",
        url: "https://reactjs.org/docs/getting-started.html",
      },
      {
        title: "GitHub",
        url: "https://github.com/facebook/react",
      },
      {
        title: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
    ],
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a programming language developed and maintained by Microsoft. It is a syntactical superset of JavaScript, adding static typing to the language. TypeScript shows useful type errors to developers during development in modern IDEs, saving time developers would have otherwise spent debugging the software at runtime.",
    links: [
      {
        title: "Website",
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "Docs",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        title: "GitHub",
        url: "https://github.com/microsoft/TypeScript",
      },
      {
        title: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/TypeScript",
      },
    ],
  },
  {
    name: "Emotion",
    description:
      "Emotion is a React CSS-in-JS library designed for writing css styles inside JavaScript and TypeScript files. It provides powerful and predictable style composition in addition to a great developer experience. Developers can style their components using both string and object notation.",
    links: [
      {
        title: "Website",
        url: "https://emotion.sh/",
      },
      {
        title: "Docs",
        url: "https://emotion.sh/docs/introduction",
      },
      {
        title: "GitHub",
        url: "https://github.com/emotion-js/emotion",
      },
    ],
  },
  {
    name: "Material UI",
    description:
      "Material UI is a React UI component library that implements Google's material design guidelines. It features pre-built with components ranging from basic buttons and form input fields to tooltips and modals.",
    links: [
      {
        title: "Website",
        url: "https://material-ui.com/",
      },
      {
        title: "Docs",
        url: "https://material-ui.com/getting-started/installation/",
      },
      {
        title: "GitHub",
        url: "https://github.com/mui-org/material-ui",
      },
    ],
  },
  {
    name: "Framer Motion",
    description:
      "Framer Motion is a popular React animation library. It allows users to create both simple animations and complex gesture-based interactions. The library implements a declarative API, otherwise known as spring animations, which lets the developer define the animation's end state, letting the library handle the rest.",
    links: [
      {
        title: "Website",
        url: "https://www.framer.com/motion/",
      },
      {
        title: "Docs",
        url: "https://www.framer.com/docs/",
      },
      {
        title: "GitHub",
        url: "https://github.com/framer/motion",
      },
    ],
  },
  {
    name: "Formik",
    description:
      "Formik is a React library that helps simplify the process of building and working with forms in React. It is designed to take care of the repetitive and tedious parts of form building, validation, and submission, making it easier and faster for developers to create forms.",
    links: [
      {
        title: "Website",
        url: "https://formik.org/",
      },
      {
        title: "Docs",
        url: "https://formik.org/docs/overview",
      },
      {
        title: "GitHub",
        url: "https://github.com/formium/formik",
      },
    ],
  },
  {
    name: "React Query",
    description:
      "React Query, aka. TanStack Query, is a data fetching library that provides hooks for fetching, caching, and updating, remote data. It has a declarative API that makes working with asynchronous data much easier than with previous solutions.",
    links: [
      {
        title: "Website",
        url: "https://tanstack.com/query/latest",
      },
      {
        title: "Docs",
        url: "https://tanstack.com/query/latest/docs/react/overview",
      },
      {
        title: "GitHub",
        url: "https://github.com/tanstack/query",
      },
    ],
  },
  {
    name: "React Icons",
    description:
      "React Icons is SVG icon library. It comprises icons from over 25 of the most popular icon libraries including Ant Design Icons, Bootstrap Icons, Feather, Font Awesome, and Material Design icons. It uses React component syntax, and utilizes ES6 imports to only bundle the icons your app is using.",
    links: [
      {
        title: "Website",
        url: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "GitHub",
        url: "https://github.com/react-icons/react-icons",
      },
    ],
  },
  {
    name: "ESLint",
    description:
      "ESLint is a tool for linting JavaScript and TypeScript code. It is used to check for errors in code and to enforce coding conventions. It can be configured to use custom rule sets and is often run both by code editors during development as well as in CI/CD.",
    links: [
      {
        title: "Website",
        url: "https://eslint.org/",
      },
      {
        title: "Configuration",
        url: "https://eslint.org/docs/user-guide/configuring/",
      },
      {
        title: "Rules",
        url: "https://eslint.org/docs/rules/",
      },
      {
        title: "GitHub",
        url: "https://github.com/eslint/eslint",
      },
    ],
  },
  {
    name: "Prettier",
    description:
      "Prettier is a tool for formatting code. It is optimized for readability and consistency, and its opinionated nature ensures developers won't spent time debating code formatting configurations. Prettier normally runs in a pre-commit hook to ensure code is formatted before it is committed.",
    links: [
      {
        title: "Website",
        url: "https://prettier.io/",
      },
      {
        title: "Docs",
        url: "https://prettier.io/docs/en/index.html",
      },
      {
        title: "Options",
        url: "https://prettier.io/docs/en/options.html",
      },
      {
        title: "GitHub",
        url: "https://github.com/prettier/prettier",
      },
    ],
  },
  {
    name: "npm",
    description:
      "npm is the default package manager for Node.js. It consists of a command-line client, also called npm, and an online database of packages, called the npm registry, that enable developers to share and reuse code.",
    links: [
      {
        title: "Website",
        url: "https://www.npmjs.com/",
      },
      {
        title: "Docs",
        url: "https://docs.npmjs.com/",
      },
      {
        title: "GitHub",
        url: "https://github.com/npm/cli",
      },
    ],
  },
  {
    name: "GitHub Actions",
    description:
      "GitHub Actions is a tool for automating software development workflows. It is integrated with GitHub repositories and enables developers to automate tasks such as building, testing, and deploying their applications.",
    links: [
      {
        title: "Website",
        url: "https://github.com/features/actions",
      },
      {
        title: "Docs",
        url: "https://docs.github.com/en/actions",
      },
      {
        title: "Workflow syntax",
        url: "https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions",
      },
    ],
  },
  {
    name: "Vercel",
    description:
      "Vercel is a modern hosting platform for websites and web apps. With zero configuration, it will build and deploy your site globally and serverlessly with a single command. It can also be set up to do continuous deployments by integrating it with your repository host.",
    links: [
      {
        title: "Website",
        url: "https://vercel.com/",
      },
      {
        title: "Docs",
        url: "https://vercel.com/docs",
      },
      {
        title: "CLI Docs",
        url: "https://vercel.com/docs/cli",
      },
    ],
  },
];
