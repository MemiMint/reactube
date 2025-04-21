import { FC } from "react";

export const VideoTitle: FC<{ title: string }> = (props) => {
  return (
    <h4 className="my-4 text-lg font-semibold font-primary">{props.title}</h4>
  );
};
