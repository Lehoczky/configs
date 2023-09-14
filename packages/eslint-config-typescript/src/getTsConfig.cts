import fs from "node:fs"
import path from "node:path"

export function getTsConfig() {
  if (fs.existsSync("tsconfig.eslint.json")) {
    return path.resolve("tsconfig.eslint.json")
  }
  if (fs.existsSync("tsconfig.json")) {
    return path.resolve("tsconfig.json")
  }
  return undefined
}
