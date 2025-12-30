import { describe, expect, test } from "vitest"

describe("Hello", () => {
  test("foo", () => {
    // eslint-disable-next-line vitest/no-conditional-in-test
    if (Math.random() > 0.5) {
      // Conditional in test
    }
    expect(1).toBe(1)
  })
})
