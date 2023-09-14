import typescriptConfig from "@lehoczky/eslint-config-typescript"
import { getTsConfig } from "@lehoczky/eslint-config-typescript/getTsConfig.cjs"
import type { Linter } from "eslint"

export = {
  extends: ["@lehoczky/eslint-config-typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    extraFileExtensions: [".vue"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts", ".vue"],
      },
    },
  },
  overrides: [
    ...typescriptConfig.overrides,
    {
      files: ["*.vue"],
      extends: ["plugin:vue/vue3-recommended", "prettier"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: getTsConfig(),
      },
      rules: {
        "vue/component-api-style": ["warn", ["script-setup"]],
        "vue/component-name-in-template-casing": [
          "warn",
          "PascalCase",
          {
            ignores: [],
          },
        ],
        "vue/custom-event-name-casing": ["warn", "kebab-case"],
        "vue/define-emits-declaration": ["error", "type-based"],
        "vue/html-self-closing": ["warn", { html: { void: "always" } }],
        "vue/next-tick-style": ["error", "promise"],
        "vue/no-ref-object-destructure": "warn",
        "vue/no-required-prop-with-default": "warn",
        "vue/no-static-inline-styles": "warn",
        "vue/no-this-in-before-route-enter": "warn",
        "vue/no-useless-mustaches": "warn",
        "vue/no-useless-v-bind": "warn",
        "vue/component-tags-order": [
          "error",
          {
            order: [
              "i18n",
              "template",
              "script:not([setup])",
              "script[setup]",
              "style",
            ],
          },
        ],
        "vue/prefer-separate-static-class": "warn",
        "vue/prefer-true-attribute-shorthand": "warn",
        "vue/dot-notation": "warn",
        "vue/eqeqeq": ["warn", "smart"],
        "vue/no-sparse-arrays": "warn",
        "vue/no-useless-concat": "warn",
        "vue/prefer-template": "warn",

        "vue/multi-word-component-names": "off",

        // Does not work well with `defineEmits`
        "@typescript-eslint/prefer-function-type": "off",
      },
    },
  ],
} as Linter.Config
