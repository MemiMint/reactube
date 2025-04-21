import { FC, useState } from "react";
import { truncate } from "@modules/shared/utils/truncate";
import { relativeTime } from "@modules/shared/utils/time/relative-time";
import { parseQuantity } from "@modules/shared/utils/parse-quantity";

type VideoDescriptionProps = {
  views: number;
  releaseDate: Date;
  description: string;
};

export const VideoDescription: FC<VideoDescriptionProps> = (props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div
      className={`my-2 rounded-sm w-full bg-gray-200 ${showMore ? "" : "h-24"} p-2`}
    >
      <h4 className="text-xs font-secondary font-bold my-2">
        {parseQuantity(props.views)} views • {relativeTime(props.releaseDate)}
      </h4>
      <div className="">
        {showMore ? props.description : truncate(props.description, 100)}
      </div>
      <p
        onClick={() => setShowMore(!showMore)}
        className="select-none text-xs font-secondary font-bold cursor-pointer my-2"
      >
        {showMore ? "show less" : "show more"}
      </p>
    </div>
  );
};
