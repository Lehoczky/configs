import type { Linter } from "eslint"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"

export const typeScript = [
  ...tseslint.configs.recommended,
  {
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

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // TypeScript turned off
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",

      // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "no-undef": "off",
    },
  },
  {
    files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
    rules: {
      "jsdoc/no-types": "warn",
    },
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
] as Linter.Config[]

export const typeScriptRequiresTypeCheck: Linter.Config[] = [
  {
    rules: {
      "@typescript-eslint/no-confusing-void-expression": [
        "warn",
        { ignoreArrowShorthand: true },
      ],
      "@typescript-eslint/no-misused-promises": [
        "warn",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "@typescript-eslint/prefer-return-this-type": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/promise-function-async": [
        "warn",
        { checkArrowFunctions: false },
      ],

      // Conflict with ESLint
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "warn",
      "no-throw-literal": "off",
      "@typescript-eslint/no-throw-literal": [
        "warn",
        {
          allowThrowingUnknown: true,
        },
      ],
      "require-await": "off",
      "@typescript-eslint/require-await": "warn",
      "no-return-await": "off",
      "@typescript-eslint/return-await": ["warn", "always"],
      camelcase: "off",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          // Ignore properties that require quotes
          selector: "property",
          format: ["camelCase"],
          filter: {
            regex: "^[{A-Z} | {0-9}]|[- ]",
            match: false,
          },
        },
      ],

      // Conflict with unicorn
      "unicorn/prefer-includes": "off",
      "@typescript-eslint/prefer-includes": "warn",
    },
  },
]

const config = [...typeScript, eslintConfigPrettier]

export default config
