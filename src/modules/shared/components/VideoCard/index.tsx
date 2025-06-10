import type { FC } from "react";
import { Link } from "react-router";
import { VideoOverlay as InlineVideoOverlay } from "./components/InlineVideoCardComponents/VideoOverlay";
import { VideoOverlay as BlockVideoOverlay } from "./components/BlockVideoCardComponents/VideoOverlay";
import { VideoAuthor } from "./components/InlineVideoCardComponents/VideoAuthor";
import { VideoInfo as InlineVideoInfo } from "./components/InlineVideoCardComponents/VideoInfo";
import { VideoInfo as BlockVideoInfo } from "./components/BlockVideoCardComponents/VideoInfo";
import { Video } from "@modules/shared/types/video";
import { truncate } from "@modules/shared/utils/truncate";

type VideoCardProps = {
  video: Video;
  layout?: "horizontal" | "vertical";
};

const mockDescr =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque et repellat laborum numquam rerum tempore dolorum distinctio voluptate, laboriosam a quas architecto at harum quibusdam fuga voluptatem inventore maiores!";

const InlineVideoCard: FC<{ video: Video }> = ({ video }) => {
  return (
    <Link to={{ pathname: "/watch", search: "?v=Qwm0VMGUFog" }}>
      <div className="cursor-pointer flex gap-4 w-full max-w-3xl">
        <InlineVideoOverlay
          thumbnailUrl={video.thumbnailUrl}
          length={video.duration}
        />

        <div className="flex flex-col justify-start gap-1">
          <InlineVideoInfo
            title={video.title}
            views={video.views}
            releaseDate={video.releaseDate}
          />
          <VideoAuthor
            authorAvatarUrl={video.channelAvatarUrl}
            authorName={video.channelName}
          />
          <div className="mt-2 w-full p text-gray-500 text-sm">
            <p>{truncate(video.description!, mockDescr.length / 2)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const BlockVideoCard: FC<{ video: Video }> = ({ video }) => {
  return (
    <Link to={{ pathname: "/watch", search: "?v=Qwm0VMGUFog" }}>
      <div className="cursor-pointer w-72">
        <BlockVideoOverlay
          thumbnailUrl={video.thumbnailUrl}
          length={video.duration}
        />
        <BlockVideoInfo
          title={video.title}
          views={video.views}
          releaseDate={video.releaseDate}
          authorAvatarUrl={video.channelAvatarUrl}
          authorName={video.channelName}
        />
      </div>
    </Link>
  );
};

export const VideoCard: FC<VideoCardProps> = ({
  video,
  layout = "vertical",
}) => {
  const layoutRender: string = layout ?? "vertical";

  return layoutRender === "horizontal" ? (
    <InlineVideoCard video={video} />
  ) : (
    <BlockVideoCard video={video} />
  );
};
