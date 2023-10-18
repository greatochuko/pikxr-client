export function getDuration(oldDate, newDate = new Date().getTime()) {
  let suffix = "s";
  const date = new Date(oldDate).getTime();
  let duration = (newDate - date) / 1000;
  if (duration >= 60) {
    duration = Math.floor(duration / 60);
    suffix = "m";
    if (duration >= 60) {
      duration = Math.floor(duration / 60);
      suffix = "h";
      if (duration >= 24) {
        duration = Math.floor(duration / 60);
        suffix = "d";
      }
    }
  }
  return duration + suffix;
}
