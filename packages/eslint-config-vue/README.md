# Eslint Config Vue

ESLint configuration for Vue projects with [TypeScript](https://www.typescriptlang.org/) and [prettier](https://prettier.io/).

## 💿 Installation

Create a new project with [vite](https://vitejs.dev/):

```sh
pnpm create vite <app-name> --template vue-ts
cd <app-name>
```

Install the dependencies for the config:

```sh
pnpm add -D eslint prettier @lehoczky/eslint-config-vue
```

## 💻 Usage

`.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  extends: ["@lehoczky/eslint-config-vue"],
}
```

Example command:

```json
{
  "scripts": {
    "eslint:fix": "eslint . --ext .js,.ts,.vue --max-warnings=0 --fix"
  }
}
```

## 🛠 TSConfig

If your `tsconfig.json` file does not [include](https://www.typescriptlang.org/tsconfig#include) every TypeScript and vue file in the project, you can create a new `tsconfig.eslint.json` file and include every file in that.

This config will automatically use `tsconfig.eslint.json` file if it finds one in the root of your repository:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "allowJs": true
  },
  "include": ["src/**/*.ts", "src/**/*.vue", "./*.ts"]
}
```
