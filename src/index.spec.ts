import { test } from ".";

test("A simple test that succeeds", (expect) => {
  return expect(0).equals(0);
});

test("A simple test that fails", (expect) => {
  return expect(0).equals(1);
});

test("Expecting that a function throws an error", (_, expect) => {
  return expect(() => {
    throw Error("Oops, I did it again!");
  }).throws();
});

// npx ts-node src/index.spec.ts
