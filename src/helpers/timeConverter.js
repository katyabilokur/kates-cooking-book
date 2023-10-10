export function timeConverter(time) {
  if (time > 1400) return "One day or at least overnight";
  if (time < 60) return `00:${time < 10 ? "0" : ""}${time}`;
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours < 10 ? "0" : ""}${hours}:${mins < 10 ? "0" : ""}${mins}`;
}

export function getTotalTime(times) {
  const timesMins = times
    .filter((time) => time.type !== "chilling")
    .map((time) => time.time);
  const totalMins = timesMins.reduce((sum, a) => sum + a, 0);
  return timeConverter(totalMins);
}
