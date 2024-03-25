# Prettier Config

[![npm version](https://badge.fury.io/js/@lehoczky%2Fprettier-config.svg)](https://badge.fury.io/js/@lehoczky%2Fprettier-config)

Shared [prettier](https://prettier.io/) configuration.

## 💿 Installation

```sh
pnpm add -D prettier @lehoczky/prettier-config
```

## 💻 Usage

`.prettierrc.json`:

```json
"@lehoczky/prettier-config"
```

or when extending an existing config:

`.prettierrc.mjs`:

```js
import config from "@lehoczky/prettier-config"

/** @type {import("prettier").Options} */
export default {
  ...config,
}
```

Example command:

```json
{
  "scripts": {
    "format:fix": "prettier . --write --ignore-unknown"
  }
}
```

Example for using with [tailwindcss](https://tailwindcss.com/) and [prettier-plugin-tailwindcss
](https://github.com/tailwindlabs/prettier-plugin-tailwindcss):

```sh
pnpm add -D prettier prettier-plugin-tailwindcss @lehoczky/prettier-config
```

`.prettierrc.mjs`:

```js
import config from "@lehoczky/prettier-config"

/** @type {import("prettier").Options} */
export default {
  ...config,
  tailwindConfig: "./tailwind.config.ts",
  plugins: ["prettier-plugin-tailwindcss"],
}
```
