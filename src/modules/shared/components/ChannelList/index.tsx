import { ChannelListProps } from "./types";
import { FC } from "react";
import { ChannelCard } from "../ChannelCard";

export const ChannelList: FC<ChannelListProps> = ({ channels, layout }) => {
  const directionClassname: string =
    layout === "row"
      ? "mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      : "mb-10 flex flex-col gap-4";

  return (
    <div className={directionClassname}>
      {channels.map((channel, index) => {
        return <ChannelCard channel={channel} key={index} />;
      })}
    </div>
  );
};
