import { expect, test } from "vitest"

test("foo", () => {
  // eslint-disable-next-line vitest/no-conditional-in-test
  if (Math.random() > 0.5) {
    expect(1).toBe(1)
  }
})
