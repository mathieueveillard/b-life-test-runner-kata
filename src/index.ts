type ExpectationFunction = <T>(expected: T, actual: T) => boolean;

type TestCallback = (expect: ExpectationFunction) => boolean;

const displayStatus = (result: boolean): string => {
  if (result) {
    return "🟢";
  }

  return "🔴";
};

export const test = (description: string, scenario: TestCallback): void => {
  const expect: ExpectationFunction = (expected, actual) => actual === expected;
  const result = scenario(expect);
  console.log(`${displayStatus(result)} ${description}`);
};
