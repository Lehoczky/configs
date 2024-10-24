import type { Linter } from "eslint"
import ts from "typescript-eslint"

export const typescript = [
  ...ts.configs.recommended,
  {
    name: "lehoczky/typescript/base",
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
      "@typescript-eslint/no-empty-object-type": [
        "warn",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "@typescript-eslint/no-extraneous-class": "warn",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // TypeScript turned off
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",

      // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.?([cm])ts", "**/*.?([cm])tsx"],
    name: "lehoczky/typescript/jsdoc",
    rules: {
      "jsdoc/no-types": "warn",
    },
  },
  {
    files: ["**/*.cjs"],
    name: "lehoczky/typescript/commonjs",
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
] as Linter.Config[]
