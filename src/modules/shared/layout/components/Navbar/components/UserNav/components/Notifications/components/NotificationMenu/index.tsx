import type { FC } from "react";
import { MdClose } from "react-icons/md";
import type { Notification } from "@shared/types/Notification";
import { NotificationMenuItem } from "./NotificationMenuItem";

const notifications: Notification[] = [
  {
    id: 1,
    channelAvatarUrl: "https://i.pravatar.cc/150?img=1",
    channelName: "Tech Reviews",
    content: "upload: Exploring the latest AMD Ryzen CPUs",
    isNew: true,
  },
  {
    id: 2,
    channelAvatarUrl: "https://i.pravatar.cc/150?img=2",
    channelName: "Gaming World",
    content: "comment on your video: 'This game looks amazing! 🔥'",
    isNew: false,
  },
  {
    id: 3,
    channelAvatarUrl: "https://i.pravatar.cc/150?img=3",
    channelName: "Music Beats",
    content: "reply to your comment: 'Glad you liked the track! 🎵'",
    isNew: true,
  },
  {
    id: 4,
    channelAvatarUrl: "https://i.pravatar.cc/150?img=4",
    channelName: "Coding Academy",
    content: "upload: Mastering TypeScript - Full Course",
    isNew: false,
  },
  {
    id: 5,
    channelAvatarUrl: "https://i.pravatar.cc/150?img=5",
    channelName: "Daily News",
    content: "comment on your video: 'Great insights, thanks for sharing!'",
    isNew: true,
  },
];

export const NotificationMenu: FC = () => {
  return (
    <div
      style={{ overflowY: "auto" }}
      className="z-30 rounded-md bg-white shadow-2xl absolute top-10 bottom-0 right-12 w-80 h-96"
    >
      <div className="sticky top-0 bg-white z-10 w-full flex items-center justify-between p-4 border-b border-b-gray-200">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold font-primary">Notifications</h3>
          <div className="text-center flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white">
            <p className="font-primary text-xs">8</p>
          </div>
        </div>
        <MdClose size={20} color="rgba(0, 0, 0.8)" />
      </div>
      <div>
        {notifications.map((notification, index) => (
          <NotificationMenuItem key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};
