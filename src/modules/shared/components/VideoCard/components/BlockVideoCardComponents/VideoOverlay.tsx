import { FC } from "react";
import { parseMillisecondsIntoReadableTime } from "@modules/shared/utils/time/readable-time";

type VideoOverlayProps = {
  thumbnailUrl: string;
  length: number;
};

export const VideoOverlay: FC<VideoOverlayProps> = (props) => {
  return (
    <div className="relative w-full h-40 bg-gray-600 rounded-md mb-2">
      <img
        className="w-full h-full rounded-md object-cover"
        src={props.thumbnailUrl}
      />
      <div
        style={{ position: "absolute", bottom: 5, right: 5 }}
        className="bg-black text-white text-xs font-secondary p-0.5 rounded-sm"
      >
        <p>{parseMillisecondsIntoReadableTime(props.length)}</p>
      </div>
    </div>
  );
};
