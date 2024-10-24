import type { ParserOptions } from "@lehoczky/eslint-config-typescript"
import type { Linter } from "eslint"
import pluginVue from "eslint-plugin-vue"

export const vue = (parserOptions: ParserOptions = {}): Linter.Config[] => [
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    name: "lehoczky/vue/base",
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ...parserOptions,
      },
    },
    rules: {
      "vue/component-api-style": ["warn", ["script-setup"]],
      "vue/component-name-in-template-casing": ["warn", "PascalCase"],
      "vue/custom-event-name-casing": ["warn", "kebab-case"],
      "vue/define-emits-declaration": ["warn", "type-based"],
      "vue/html-self-closing": ["warn", { html: { void: "always" } }],
      "vue/next-tick-style": ["warn", "promise"],
      "vue/no-ref-object-reactivity-loss": "warn",
      "vue/no-required-prop-with-default": "warn",
      "vue/no-static-inline-styles": "warn",
      "vue/no-this-in-before-route-enter": "warn",
      "vue/no-useless-mustaches": "warn",
      "vue/no-useless-v-bind": "warn",
      "vue/block-order": [
        "warn",
        {
          order: ["script:not([setup])", "script[setup]", "template", "style"],
        },
      ],
      "vue/prefer-separate-static-class": "warn",
      "vue/prefer-true-attribute-shorthand": "warn",
      "vue/dot-notation": "warn",
      "vue/eqeqeq": ["warn", "smart"],
      "vue/no-sparse-arrays": "warn",
      "vue/no-useless-concat": "warn",
      "vue/prefer-template": "warn",

      // Does not work well, when extending native HTML interfaces
      "vue/prop-name-casing": "off",
      // Mostly a legacy pattern
      "vue/multi-word-component-names": "off",
      // Does not work well with `defineEmits`
      "@typescript-eslint/prefer-function-type": "off",
    },
  },
]
