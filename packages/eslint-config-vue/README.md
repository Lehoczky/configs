# Eslint Config Vue

[![npm version](https://badge.fury.io/js/@lehoczky%2Feslint-config-vue.svg)](https://badge.fury.io/js/@lehoczky%2Feslint-config-vue)

ESLint configuration for Vue projects with [TypeScript](https://www.typescriptlang.org/). Supports [prettier](https://prettier.io/) by default.

## 💿 Installation

Create a new project with [vite](https://vitejs.dev/):

```sh
pnpm create vite <app-name> --template vue-ts
cd <app-name>
```

Install eslint and the config:

```sh
pnpm add -D eslint @lehoczky/eslint-config-vue
```

## 💻 Usage

### With Type Checking

`eslint.config.mjs`:

```js
import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"

/** @type {import("eslint").Linter.Config[]} */
export default configLehoczkyVue({
  parserOptionsForTypeChecking: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
  },
})
```

See more: [typescript-eslint | Linting with Type Information](https://typescript-eslint.io/getting-started/typed-linting)

### Without Type Checking

```js
import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"

/** @type {import("eslint").Linter.Config[]} */
export default configLehoczkyVue()
```

### Combining with Astro

```js
import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"
import eslintPluginAstro from "eslint-plugin-astro"

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...configLehoczkyVue({
    parserOptionsForTypeChecking: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }),
  ...eslintPluginAstro.configs["flat/recommended"],
]
```

## 📢 Commands

`package.json`:

```json
{
  "scripts": {
    "eslint:check": "eslint --max-warnings=0",
    "eslint:fix": "eslint --max-warnings=0 --fix"
  }
}
```
