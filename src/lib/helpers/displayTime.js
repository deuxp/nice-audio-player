export default function (duration, elapsedTime) {
  if (elapsedTime) {
    duration -= elapsedTime;
  }

  const sec = Math.floor(duration % 60);
  const min = Math.floor((duration / 60) % 60);
  const hour = Math.floor(duration / (60 * 60));

  const formatSec = sec.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const formatMin = min.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return `${hour}:${formatMin}:${formatSec}`;
}
