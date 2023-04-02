import { describe, expect } from "vitest";
import { makePrettyPriceNumber } from "./makePrettyPriceNumber";

describe("makePrettyPriceNumber", () => {
  describe.each([
    [1, "₽", "1 ₽"],
    [12, "₽", "12 ₽"],
    [123, "₽", "123 ₽"],
    [1234, "₽", "1 234 ₽"],
    [12345, "₽", "12 345 ₽"],
    [123456, "₽", "123 456 ₽"],
    [1234567, "₽", "1 234 567 ₽"],
    [12345678, "₽", "12 345 678 ₽"],
    [123456789, "₽", "123 456 789 ₽"],
    [123456789, "₽", "123 456 789 ₽"],
    [123456789, undefined, "123 456 789"],
    [16789.02, "₽", "16 789.02 ₽"],
    [1126789.02, "₽", "1 126 789.02 ₽"],
  ])(
    "should return pretty price number: %1, %2, %3",
    (price, currency, result) => {
      expect(makePrettyPriceNumber(price, currency)).toEqual(result);
    },
  );
});
