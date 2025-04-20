import { Channel } from "@modules/shared/types/channel";
import { SwitchType } from "../ContentSwitcher/type";
import { Video } from "@modules/shared/types/video";

export type SearchResultProps = {
  searchType: SwitchType;
  gridMode: "horizontal" | "vertical";
  channels: Channel[];
  videos: Video[];
};
