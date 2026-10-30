import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeGuestCount } from "../../lib/home-demo.ts";

test("typed guest counts handle empty, malformed, fractional and out-of-range values", () => {
  for (const [input, expected] of [
    ["", 0],
    ["25", 25],
    ["0", 0],
    ["50", 50],
    ["-4", 0],
    ["999", 50],
    ["3.9", 3],
    ["not-a-number", 0],
    ["Infinity", 0],
    ["1e309", 0],
  ]) {
    assert.equal(normalizeGuestCount(input), expected, input);
  }
});
