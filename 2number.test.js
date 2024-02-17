import { it, expect } from "vitest";
import { cleanNumbers } from "./2number";
//integration test
it("should return an array of  if an array of string number is provided", () => {
  //Arrange
  const stringNumbers = ["1", "2", "3"];

  //Action
  const result = cleanNumbers(stringNumbers);

  //Assertion
  expect(result[0]).toBeTypeOf("number");
  //expect(result[0]).toBeTypeOf("string");
});

it("should throw error if at least an empty string is provided", () => {
  //Arrange
  const stringNumbers = ["", "2", "3"];

  //Action
  const resultFn = () => cleanNumbers(stringNumbers);

  //Assertion
  expect(resultFn).toThrow();
});
