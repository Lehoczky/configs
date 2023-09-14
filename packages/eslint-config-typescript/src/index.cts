import type { Linter } from "eslint"

import { getTsConfig } from "./getTsConfig.cjs"
import typeCheckingConfig from "./type-checking.cjs"

export = {
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "@lehoczky/eslint-config-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/class-literal-property-style": ["warn", "fields"],
    "@typescript-eslint/consistent-generic-constructors": [
      "warn",
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",

    // Conflicts with ESLint
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",

    // TypeScript turned off
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    "no-undef": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      parserOptions: {
        project: getTsConfig(),
      },
      ...typeCheckingConfig,
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.{js,cjs}"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
} as Linter.Config
