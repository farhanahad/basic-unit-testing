import { it, expect } from "vitest";
import { add } from "./1math";

it("should return the correct sum if an array of number is provided", () => {
  //Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);
  //Action
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});

it("It should provide NaN if at least one invalid number is provided ", () => {
  //Arrange
  const numbers = [1, "invalid", 3];

  //Action
  const result = add(numbers);

  //Assertion
  expect(result).toBeNaN();
});

it("It should provide correct sum  if an array numeric string  is provided ", () => {
  //Arrange
  const numbers = ["1", "3", "3"];
  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);
  //Action
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});

// it("It should throw an error  if no argument id passed ", () => {
//   try {
//     const result = add();
//   } catch (error) {
//     expect(error).toBeDefined();
//   }
// });

it("It should throw an error  if no argument is passed ", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("It should throw an error  if multiple argument is provided ", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow(/is not iterable/i);
});
