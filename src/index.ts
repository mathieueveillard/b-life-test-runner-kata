type ExpectFunction = <T>(expected: T) => {
  equals: (actual: T) => boolean;
};

type ExpectThrowsFunction = (fn: () => void) => {
  throws: () => boolean;
};

type TestCallback = (expect: ExpectFunction, expectThrows: ExpectThrowsFunction) => boolean;

const displayStatus = (result: boolean): string => {
  if (result) {
    return "🟢";
  }
  return "🔴";
};

const expect: ExpectFunction = <T>(expected: T) => ({
  equals: (actual: T) => actual === expected,
});

const expectThrows: ExpectThrowsFunction = (fn) => ({
  throws: () => {
    try {
      fn();
      return false;
    } catch (error) {
      return true;
    }
  },
});

export const test = (description: string, scenario: TestCallback): void => {
  const result = scenario(expect, expectThrows);
  console.log(`${displayStatus(result)} ${description}`);
};
