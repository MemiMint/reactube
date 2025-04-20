import { Channel } from "@modules/shared/types/channel";
import { FC, useState } from "react";

type ChannelCardProps = {
  channel: Channel;
};

export const ChannelCard: FC<ChannelCardProps> = ({ channel }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const subscribeBtnClassname = isSubscribed
    ? "font-secondary cursor-pointer px-2 py-1 rounded-full text-sm font-medium border border-red-600 text-red-600 hover:bg-red-700 hover:text-white transition"
    : "font-secondary cursor-pointer px-2 py-1 rounded-full text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition";

  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl shadow-md bg-white border border-gray-200 max-w-md">
      <img
        src={channel.channelAvatarUrl}
        alt={channel.channelName}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1 gap-1">
          <h2 className="text-base font-primary font-medium">
            {channel.channelName}
          </h2>
          <button
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={subscribeBtnClassname}
          >
            {isSubscribed ? "unsubscribe" : "subscribe"}
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-2">
          {channel.channelFollowers} followers
        </p>
        <p className="text-sm text-gray-700">{channel.channelDescription}</p>
      </div>
    </div>
  );
};
