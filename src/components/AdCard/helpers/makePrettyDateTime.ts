import { DateTime } from "luxon";

export function makePrettyDateTime(dateTime: string) {
  const localizedDateTime = DateTime.fromISO(dateTime.replaceAll(" ", ""))
    .toFormat("f")
    .replaceAll(" ", " ");

  const [localizedDate, localizedTime] = localizedDateTime.split(", ");
  const [fdp, sdp, tdp] = localizedDate.split("/");

  const prettyLocalizedDate = `${fdp.padStart(2, "0")}.${sdp.padStart(
    2,
    "0",
  )}.${tdp.padStart(4, "0")}`;

  const [time, meridiem] = localizedTime.split(" ");
  const [htp, mtp] = time.split(":");

  const prettyLocalizedTime = `${htp.padStart(2, "0")}.${mtp.padStart(2, "0")}${
    meridiem ? " " + meridiem : ""
  }`;

  return prettyLocalizedDate + ", " + prettyLocalizedTime;
}
