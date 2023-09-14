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
