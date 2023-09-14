// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  env: {
    node: true,
  },
  extends: ["@lehoczky/eslint-config-vue"],
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/naming-convention": "off",
  },
})
