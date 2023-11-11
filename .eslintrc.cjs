// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
  },
  extends: ["@lehoczky/eslint-config-vue"],
  rules: {
    "@typescript-eslint/naming-convention": "off",
  },
})
