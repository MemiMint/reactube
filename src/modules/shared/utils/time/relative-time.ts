import { formatDistanceToNow } from "date-fns";

export const relativeTime = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true });
};
