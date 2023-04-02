import { describe, expect } from "vitest";
import { makePrettyDateTime } from "./makePrettyDateTime";

describe("makePrettyDateTime", () => {
  describe.each([
    ["2016-05-25T09:08:34.123", "05.25.2016, 09.08 AM"],
    ["2016-05-25T09:08:34.123 -05:00", "05.25.2016, 05.08 PM"],
  ])("should return pretty date time: %1, %2, %3", (dateTime, result) => {
    expect(makePrettyDateTime(dateTime)).toEqual(result);
  });
});
