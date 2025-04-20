import { FC } from "react";

type VideoAuthorProps = {
  authorAvatarUrl: string;
  authorName: string;
};

export const VideoAuthor: FC<VideoAuthorProps> = (props) => {
  return (
    <div className="mt-2 flex items-center gap-2">
      <img className="w-6 h-6 rounded-full" src={props.authorAvatarUrl} />
      <p className="text-gray-400 text-xs font-primary">{props.authorName}</p>
    </div>
  );
};
