import { Video } from "@modules/shared/types/video";
import type { FC } from "react";

type VideoCardProps = {
  video: Video;
};

export const VideoCard: FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="cursor-pointer">
      <div className="w-72 h-40 bg-gray-600 rounded-md mb-2">
        <img className="w-full h-full rounded-md" src={video.thumbnailUrl} />
      </div>
      <div className="flex gap-2">
        <img className="w-8 h-8 rounded-full" src={video.channelAvatarUrl} />
        <div className="w-full flex flex-col">
          <h3 className="text-sm font-primary">{video.title}</h3>
          <div>
            <p className="text-gray-400 text-sm font-primary">
              {video.channelName}
            </p>
            <p className="text-gray-400 text-sm font-primary">
              {video.views} • {video.releaseDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
