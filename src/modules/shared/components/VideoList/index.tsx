import React, { FC } from "react";
import { VideoListProps } from "./types";
import { VideoCard } from "../VideoCard";

export const VideoList: FC<VideoListProps> = ({ videos, layout = "row" }) => {
  const directionClassname: string =
    layout === "row"
      ? "mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      : "mb-10 flex flex-col gap-4";

  return (
    <div className={directionClassname}>
      {videos.map((video, index) => {
        return (
          <VideoCard
            layout={layout === "row" ? "vertical" : "horizontal"}
            key={index}
            video={video}
          />
        );
      })}
    </div>
  );
};
