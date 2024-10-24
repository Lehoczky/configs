import type { Linter } from "eslint"
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort"

export const simpleImportSort: Linter.Config[] = [
  {
    name: "lehoczky/javascript/simple-import-sort",
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "simple-import-sort/imports": "warn",
    },
  },
]
