import { useEffect, useState } from "react";

const DATE_UNIT = [
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDataDiff = (timestap) => {
  const now = Date.now();
  const elapsed = (now - timestap) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNIT) {
    if (elapsed > secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};
export default function useTimeAgo(timestap) {
  //getDateDiff => devuelve una value y un unit

  const [timeInterval, setTime] = useState(() => getDataDiff(timestap));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => getDataDiff(timestap));
    }, 300000);

    return () => clearInterval(interval);
  }, [timestap]);

  const { value, unit } = timeInterval;
  console.log(value, unit);

  const relativeTime = new Intl.RelativeTimeFormat("en", {
    style: "short",
  });

  const dateFormated = relativeTime.format(value * -1, unit); // el primero debe ser un numero, el segundo un string

  return dateFormated;
}
