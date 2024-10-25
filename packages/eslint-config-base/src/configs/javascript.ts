import js from "@eslint/js"
import type { Linter } from "eslint"
import globals from "globals"

export const javascript: Linter.Config[] = [
  js.configs.recommended,
  {
    name: "lehoczky/javascript/base",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node,
      },
    },
    rules: {
      complexity: ["warn", { max: 13 }],
      "default-case-last": "warn",
      "dot-notation": "warn",
      eqeqeq: ["warn", "smart"],
      "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
      "grouped-accessor-pairs": ["warn", "getBeforeSet"],
      "max-depth": ["warn", 6],
      "max-params": ["warn", { max: 8 }],
      "no-caller": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-constructor-return": "warn",
      "no-extend-native": "warn",
      "no-implicit-coercion": ["warn", { boolean: false }],
      "no-lonely-if": "warn",
      "no-multi-str": "warn",
      "no-nested-ternary": "warn",
      "no-promise-executor-return": ["warn", { allowVoid: true }],
      "no-return-assign": "warn",
      "no-throw-literal": "warn",
      "no-unneeded-ternary": "warn",
      "no-unreachable-loop": "warn",
      "no-useless-concat": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "object-shorthand": "warn",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-object-spread": "warn",
      "prefer-rest-params": "warn",
      "prefer-template": "warn",
      radix: "warn",
      "require-await": "warn",
      yoda: ["warn", "never", { exceptRange: true }],
    },
  },
  {
    files: ["**/*.cjs"],
    name: "lehoczky/javascript/commonjs-globals",
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },
  {
    files: [`**/scripts/**/*.?([cm])js`],
    name: "lehoczky/javascript/scripts",
    rules: {
      "no-console": "off",
    },
  },
]
