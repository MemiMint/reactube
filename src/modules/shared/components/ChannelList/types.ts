import { Channel } from "@modules/shared/types/channel";

export type ChannelListProps = {
  channels: Channel[];
  layout: "row" | "column";
};
