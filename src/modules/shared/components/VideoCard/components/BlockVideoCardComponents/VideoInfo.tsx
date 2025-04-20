import { parseQuantity } from "@modules/shared/utils/parse-quantity";
import { FC } from "react";

type VideoInfoProps = {
  authorAvatarUrl: string;
  authorName: string;
  title: string;
  views: number;
  releaseDate: string;
};

export const VideoInfo: FC<VideoInfoProps> = (props) => {
  return (
    <div className="flex gap-2">
      <img className="w-8 h-8 rounded-full" src={props.authorAvatarUrl} />
      <div className="w-full flex flex-col">
        <h3 className="text-sm font-primary">{props.title}</h3>
        <p className="text-gray-400 text-sm font-primary">{props.authorName}</p>
        <p className="text-gray-400 text-sm font-primary">
          {parseQuantity(props.views)} views • {props.releaseDate}
        </p>
      </div>
    </div>
  );
};
