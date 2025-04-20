import { Video } from "@modules/shared/types/video";

export type VideoListProps = {
  videos: Video[];
  layout: "row" | "column";
};
