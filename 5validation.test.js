import { it, expect, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./5validation";

describe("validate email", () => {
  it("Should validate a correct email address", () => {
    const email = "example@gmail.com";
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  it("Should throw an error if an invalid email is passed", () => {
    const email = "example";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("Should throw an error if an empty string is passed", () => {
    const email = "";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("Should throw an error for a null email address", () => {
    expect(() => validateEmail(null)).toThrow("Invalid email address");
  });

  it("Should throw an error for a undefined email address", () => {
    expect(() => validateEmail(undefined)).toThrow("Invalid email address");
  });
});

describe("validateArrayNotEmpty", () => {
  it("Should validate non empty array", () => {
    const array = [2, 5];
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).not.toThrow();
  });

  it("Throws an array for an empty array", () => {
    expect(() => validateArrayNotEmpty([])).toThrow("Array cannot be empty");
  });

  it("Throws an array for an empty array", () => {
    expect(() => validateArrayNotEmpty("not an array")).toThrow(
      "Array cannot be empty"
    );
  });

  it("Throws an array for an empty array", () => {
    expect(() => validateArrayNotEmpty(null)).toThrow("Array cannot be empty");
  });

  it("Throws an array for an empty array", () => {
    expect(() => validateArrayNotEmpty(undefined)).toThrow(
      "Array cannot be empty"
    );
  });
});
