import { test, expect } from "vitest";
import { nameDecoder } from "./main.js";

test("The output should be Bill", () => {
  expect(nameDecoder("Brazil", "3cbfcb", "hell")).toBe("Bill");
});
test("The output should be Miller", () => {
  expect(nameDecoder("Manchester", "cccdbf15ca", "Idunno")).toBe("Miller");
});
test("The output should be Edward", () => {
  expect(nameDecoder("England", "1daw1a2ic1", "howiss")).toBe("Edward");
});
test("The output should be Phelps", () => {
  expect(nameDecoder("Paris", "b4ealabhaf", "maybeG")).toBe("Phelps");
});
test("The output should be Frankie", () => {
  expect(nameDecoder("France", "ara1gbkaiabaab", "whoiste")).toBe("Frankie");
});

// To test your code make sure to use these commands on the console
// npm install
// npm test
