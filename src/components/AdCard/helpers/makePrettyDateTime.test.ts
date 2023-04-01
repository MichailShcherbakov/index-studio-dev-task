import { describe, expect, it } from "vitest";
import { makePrettyDateTime } from "./makePrettyDateTime";
import { DateTime } from "luxon";

describe("makePrettyDateTime", () => {
  describe.each([
    [
      DateTime.fromISO("2016-05-25T09:08:34.123").toISO(),
      "05.25.2016, 09.08 AM",
    ],
  ])("should return pretty date time: %1, %2, %3", (dateTime, result) => {
    expect(makePrettyDateTime(dateTime)).toEqual(result);
  });
});
