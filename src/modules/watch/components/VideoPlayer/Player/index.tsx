import React, { FC } from "react";

type PlayerProps = {
  muted: boolean;
  src: string;
  ref: React.RefObject<HTMLVideoElement | null>;
  onClick(): void;
  onLoadMetadata(): void;
  onTimeUpdate(): void;
  onDoubleClick(): void;
};

export const Player: FC<PlayerProps> = ({
  src,
  ref,
  muted,
  onClick,
  onDoubleClick,
  onLoadMetadata,
  onTimeUpdate,
}) => {
  return (
    <video
      autoPlay
      muted={muted}
      src={src}
      ref={ref}
      onLoadedMetadata={onLoadMetadata}
      onTimeUpdate={onTimeUpdate}
      className="w-full h-full"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    ></video>
  );
};

//https://media.w3.org/2010/05/sintel/trailer.mp4
