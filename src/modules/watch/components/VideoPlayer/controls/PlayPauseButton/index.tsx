import React, { FC } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const BUTTON_PROPERTIES = {
  size: 20,
  color: "white",
  className: "cursor-pointer select-none",
};

type PlayPauseButtonProps = {
  isPlaying: boolean;
  onHandlePlay(): void;
};

export const PlayPauseButton: FC<PlayPauseButtonProps> = ({
  isPlaying,
  onHandlePlay,
}) => {
  return isPlaying ? (
    <FaPause onClick={onHandlePlay} {...BUTTON_PROPERTIES} />
  ) : (
    <FaPlay onClick={onHandlePlay} {...BUTTON_PROPERTIES} />
  );
};
