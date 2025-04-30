import type { FC } from "react";

type RecommendedVideo = {
  videoThumbnailUrl: string;
  videoTitle: string;
  videoAuthorName: string;
  views: string;
  releaseDate: string;
};

export const RecommendedVideo: FC<RecommendedVideo> = (props) => {
  return (
    <div className="w-full h-24 flex text-sm gap-1">
      <div
        style={{ width: 150, height: "100%" }}
        className="bg-red-300 flex-shrink-0"
      >
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.videoThumbnailUrl}
        />
      </div>
      <div className="flex flex-col justify-between py-2">
        <p className="text-sm font-primary">{props.videoTitle}</p>
        <div>
          <p className="text-xs text-gray-500">{props.videoAuthorName}</p>
          <p className="text-xs text-gray-500">
            {props.views} • {props.releaseDate}
          </p>
        </div>
      </div>
    </div>
  );
};
