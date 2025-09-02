import { test } from ".";

test("A simple test that succeeds", (expectEquals) => {
  return expectEquals(0, 0);
});

test("A simple test that fails", (expectEquals) => {
  return expectEquals(0, 1);
});

// npx ts-node src/index.spec.ts
