export const parseMillisecondsIntoReadableTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = minutes > 9 ? minutes : "0" + minutes;
  const paddedSeconds = seconds > 9 ? seconds : "0" + seconds;

  if (hours > 0) {
    const paddedHours = hours > 9 ? hours : "0" + hours;
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  } else {
    return `${paddedMinutes}:${paddedSeconds}`;
  }
};
