import { configLehoczkyTypescript } from "@lehoczky/eslint-config-typescript"

export default [
  ...configLehoczkyTypescript({
    typeCheckWithParserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }),
]
