import { Notification } from "@modules/shared/types/notification";
import type { FC } from "react";

export const NotificationMenuItem: FC<{ notification: Notification }> = ({
  notification,
}) => {
  return (
    <div
      className={`p-2 flex gap-2 ${notification.isNew ? "bg-blue-100" : ""}`}
    >
      <img
        className="w-10 h-10 rounded-full"
        src={notification.channelAvatarUrl}
        alt=""
      />
      <div>
        <p className="text-sm">
          {notification.channelName} {notification.content}{" "}
        </p>
        <p className="text-xs text-gray-400 mt-2">10 minutes ago</p>
      </div>
    </div>
  );
};
