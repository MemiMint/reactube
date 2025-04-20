import { parseQuantity } from "@modules/shared/utils/parse-quantity";
import { FC } from "react";

type VideoInfoProps = {
  title: string;
  views: number;
  releaseDate: string;
};

export const VideoInfo: FC<VideoInfoProps> = (props) => {
  return (
    <>
      <h3 className="text-lg font-primary">{props.title}</h3>
      <p className="text-gray-400 text-xs font-primary">
        {parseQuantity(props.views)} views • {props.releaseDate}
      </p>
    </>
  );
};
