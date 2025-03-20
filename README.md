# Frontend test task

## Description

Test task for the Frontend Developer position.

---

## Main Features:

1. **HOC Data Provider** — implemented a Higher-Order Component (HOC) that loads data and provides it to child components via context.
2. **Routing** — implemented routing for three pages: `main`, `results`, and `finalize`. Added error handling for navigating to a non-existent page.
3. **Tables** — implemented a responsive table using `grid`.
4. **Sorting**:
    - Implemented ascending and descending alphabetical sorting for the columns `name`, `type`, and `site`.
    - Implemented custom sorting for the `status` column:
        - **ASC**: `Online`, `Paused`, `Stopped`, `Draft`
        - **DESC**: `Draft`, `Stopped`, `Paused`, `Online`
5. **TableItem** — implemented an `entity` component responsible for rendering a table item.
6. **SearchForm** — implemented a search feature that filters list items based on the entered input. The search is optimized using a custom `useDebounce` hook.
7. **Data Normalization** — implemented data normalization to simplify processing and offload the `Table` component.
8. **Responsive Design** — implemented responsiveness to ensure proper layout and user experience across different screen sizes, using CSS Grid and Flexbox along with media queries to adapt the app components

---

## Tech Stack

1. **React** — the project was manually configured from scratch. All libraries, dependencies, including bundlers, linters, formatters, and pre-commit hooks, were configured manually.
2. **TypeScript** — used in combination with React.
3. **React Router Dom** — for routing implementation.
4. **Husky + Lint Staged** — for pre-commit hooks.
5. **ESLint + StyleLint** — for automatic code quality control.
6. **Prettier** — for auto-formatting the code.
7. **Webpack** — for project bundling.
8. **Vite** — for fast development mode.

---

## Project launch

```
npm install - install dependencies
npm run start:json - start json server
npm run start - launch the project using Vite
npm run start:webpack - launch the project on the Webpack dev server
```

---

## Scripts

- `npm run start:json` - Start the JSON server using the configuration from `json-server/config.json` and watch `json-server/db.json`
- `npm run start` - Launch the frontend project using Vite
- `npm run start:webpack` - Launch the frontend project on the Webpack dev server on port 3000
- `npm run build:dev` - Build the project in development mode using Webpack
- `npm run build:prod` - Build the project in production mode using Webpack
- `npm run lint:ts` - Run ESLint to check TypeScript and TSX files for linting issues
- `npm run lint:ts:fix` - Run ESLint and automatically fix linting issues in TypeScript and TSX files
- `npm run lint:scss` - Run Stylelint to check SCSS files for linting issues
- `npm run lint:scss:fix` - Run Stylelint and automatically fix linting issues in SCSS files
- `npm run prettier` - Format TypeScript, TSX, and JSON files using Prettier
- `npm run prepare` - Automatically set up Husky for managing Git hooks

---

## Project architecture

The project is developed according to the Feature-Sliced Design methodology.

Documentation link - - [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Linting

This project uses ESLint, Stylelint, and Prettier to maintain code quality. ESLint ensures consistent and error-free TypeScript code, Stylelint checks SCSS files for style issues, and Prettier automatically formats TypeScript, TSX, and JSON files for consistent code styling.

##### Launch linters and formatter:

- `npm run lint:ts` - Lint TypeScript files
- `npm run lint:ts:fix` - Fix TypeScript files with ESLint
- `npm run lint:scss` - Lint SCSS files with the style linter
- `npm run lint:scss:fix` - Fix SCSS files with the style linter
- `npm run prettier` - Format TypeScript, TSX, and JSON files using Prettier

---

## Project configuration

For development, the project contains 2 configs:

- [Webpack](/config/webpack/config_build.ts)
- [Vite](/vite.config.ts)

---

## Entities

- [TableHead](/src/entities/TableHead)
- [TableItem](/src/entities/TableItem)

## Features

- [SearchForm](/src/features/SearchForm)
- [Table](/src/features/Table)
- [ResultsViewer](/src/features/ResultsViewer)
- [FinalizeViewer](/src/features/FinalizeViewer)

## Shared UI

- [Error](/src/shared/ui/Error)
- [Loader](/src/shared/ui/Loader)
- [NoResults](/src/shared/ui/NoResults)

---

## Screenshots

<img src="https://github.com/NathanBailie/test-task-1/raw/main/src/shared/assets/screenshots/main.png" width="900" />
<img src="https://github.com/NathanBailie/test-task-1/raw/main/src/shared/assets/screenshots/sorting.png" width="900" />
<img src="https://github.com/NathanBailie/test-task-1/raw/main/src/shared/assets/screenshots/search.png" width="900" />
<img src="https://github.com/NathanBailie/test-task-1/raw/main/src/shared/assets/screenshots/adaptive.png" width="400" />
