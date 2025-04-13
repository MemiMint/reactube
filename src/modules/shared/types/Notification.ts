//type NotificationType = "POST" | "COMMENT" | "REPLY";

export type Notification = {
  id?: number;
  channelAvatarUrl: string;
  channelName: string;
  content: string;
  isNew: boolean;
};
