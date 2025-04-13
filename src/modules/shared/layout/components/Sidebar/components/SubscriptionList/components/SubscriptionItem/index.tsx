import type { FC } from "react";
import { SubscriptionItem as ISubscriptionItem } from "../../types";

type SubscriptionItemProps = {
  channel: ISubscriptionItem;
};

export const SubscriptionItem: FC<SubscriptionItemProps> = ({ channel }) => {
  return (
    <div className="cursor-pointer p-0.5 w-full flex items-center gap-6 hover:bg-gray-200 hover:rounded-md">
      <img src={channel.channelUrl} className="w-6 h-6 rounded-full" />
      <p className="text-sm font-primary font-medium">{channel.channelName}</p>
    </div>
  );
};
