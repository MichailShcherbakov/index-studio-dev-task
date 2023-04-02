export function makePrettyPriceNumber(price: number, currency?: string) {
  currency = currency ? " " + currency : "";

  const parts = price.toString().split(".");

  const integerPart = parts[0];
  let fractionalPart = parts[1];

  fractionalPart = fractionalPart ? "." + fractionalPart : "";

  let prettyIntegerPart = "";

  const lastIntegerIndexOfPart = integerPart.length - 1;
  for (let i = lastIntegerIndexOfPart; 0 <= i; --i) {
    if (
      i !== lastIntegerIndexOfPart &&
      (lastIntegerIndexOfPart - i) % 3 === 0
    ) {
      prettyIntegerPart = " " + prettyIntegerPart;
    }

    prettyIntegerPart = integerPart[i] + prettyIntegerPart;
  }

  return prettyIntegerPart + fractionalPart + currency;
}
