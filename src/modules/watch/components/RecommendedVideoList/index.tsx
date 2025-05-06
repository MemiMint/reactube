import { Video } from "@modules/shared/types/video";
import { FC } from "react";
import { RecommendedVideo } from "../RecommendedVideo";
import { parseQuantity } from "@modules/shared/utils/parse-quantity";

export const RecommendedVideoList: FC<{
  recommendedVideos: Partial<Video>[];
}> = ({ recommendedVideos }) => {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-4">
      {recommendedVideos.map((recommendedVideo, index) => {
        return (
          <RecommendedVideo
            key={index}
            videoThumbnailUrl={recommendedVideo.thumbnailUrl ?? ""}
            releaseDate={recommendedVideo.releaseDate ?? ""}
            videoAuthorName={recommendedVideo.channelName ?? ""}
            videoTitle={recommendedVideo.title ?? ""}
            views={parseQuantity(recommendedVideo.views ?? 0)}
          />
        );
      })}
    </aside>
  );
};
