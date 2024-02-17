import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import CryptoJS from "crypto-js";
import { encryptMessage, encryptMessagePromise } from "./7async";

beforeAll(() => {
  console.log("Before all");
});
beforeEach(() => {
  console.log("Before each test");
});
afterEach(() => {
  console.log("After each test");
});
afterAll(() => {
  console.log("After all");
});

it("should encrypt the message", async () => {
  const message = "hello world";
  const secretKey = "secret";
  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (encryptedMessage) => {
      resolve(encryptedMessage);
    });
  });
  expect(encryptedData).toBeDefined();
});

it("should also just pass", async () => {
  const message = "hello world";
  const secretKey = "secret";
  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();
});

it("should encrypt the message correctly", async () => {
  const message = "hello world";
  const secretKey = "secret";
  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();

  const decryptedMessage = CryptoJS.AES.decrypt(
    encryptedData,
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  expect(decryptedMessage).toBe(message);
});
