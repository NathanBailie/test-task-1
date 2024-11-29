# React template starter

## Description

This is a starter template for React development, preconfigured with Webpack and Vite. It allows you to start building new project right away without spending time setting up the environment. TypeScript, ESLint, Stylelint, and Prettier are supported to ensure code quality and ease of use. The setup is based on Timur Ulbi's build from his [webpack course](https://youtu.be/acAH2_YT6bs 'click')

---

## Key Features

- Support for Webpack and Vite for development and builds
- TypeScript
- Linting and formatting with ESLint, Stylelint, and Prettier.
- Automation with Husky and lint-staged
- CSS modules
- SCSS and SVG support, along with build optimization and analysis
- All dependencies are installed and configured manually, with clear configuration files that can be easily modified to suit the needs of your project

---

## Project launch

```
npm install - install dependencies
npm run start - launch the project on the Webpack dev server
npm run start:vite - launch the project using Vite
```

---

## Scripts

- `npm run start` - Launch the frontend project on the Webpack dev server on port 3000
- `npm run start:vite` - Launch the frontend project using Vite
- `npm run build:dev` - Build the project in development mode using Webpack
- `npm run build:prod` - Build the project in production mode using Webpack
- `npm run lint:ts` - Run ESLint to check TypeScript and TSX files for linting issues
- `npm run lint:ts:fix` - Run ESLint and automatically fix linting issues in TypeScript and TSX files
- `npm run lint:scss` - Run Stylelint to check SCSS files for linting issues
- `npm run lint:scss:fix` - Run Stylelint and automatically fix linting issues in SCSS files
- `npm run prettier` - Format TypeScript, TSX, and JSON files using Prettier.
- `npm run prepare` - Automatically set up Husky for managing Git hooks

---
