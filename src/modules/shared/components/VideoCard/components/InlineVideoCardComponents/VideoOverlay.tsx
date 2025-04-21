import { parseMillisecondsIntoReadableTime } from "@modules/shared/utils/time/readable-hour";
import { FC } from "react";

type VideoOverlayProps = {
  thumbnailUrl: string;
  length: number;
};

export const VideoOverlay: FC<VideoOverlayProps> = (props) => {
  return (
    <div className="relative w-80 h-48 bg-gray-600 rounded-md overflow-hidden flex-shrink-0">
      <img className="w-full h-full object-cover" src={props.thumbnailUrl} />
      <div
        style={{ position: "absolute", bottom: 5, right: 5 }}
        className="bg-black text-white text-xs font-secondary p-0.5 rounded-sm"
      >
        <p>{parseMillisecondsIntoReadableTime(props.length)}</p>
      </div>
    </div>
  );
};
