import { parseQuantity } from "@modules/shared/utils/parse-quantity";
import { FC, useState } from "react";

type ChannelInfoProps = {
  channelAvatarUrl?: string;
  channelName: string;
  channelSubscriptions: number;
  subscribed?: boolean;
};

export const ChannelInfo: FC<ChannelInfoProps> = (props) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    props.subscribed ?? false,
  );

  const subscribeClassname: string = isSubscribed
    ? "border-2 border-black text-black"
    : "bg-black text-white";

  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center  rounded-full bg-gray-300">
        {props.channelAvatarUrl ? (
          <img
            className="w-12 h-12 rounded-full"
            src={props.channelAvatarUrl}
          />
        ) : (
          <p className="font-primary text-black text-lg font-bold">
            {props.channelName[0]}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-secondary font-semibold text-gray-700">
          {props.channelName}
        </p>
        <p className="text-xs text-gray-500">
          {parseQuantity(props.channelSubscriptions)} subscribers
        </p>
      </div>
      <button
        onClick={() => setIsSubscribed(!isSubscribed)}
        className={`cursor-pointer ml-4 px-4 h-8 text-xs rounded-full font-secondary ${subscribeClassname}`}
      >
        {isSubscribed ? "subscribed" : "subscribe"}
      </button>
    </div>
  );
};
