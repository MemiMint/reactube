import { useState } from "react";

export const usePlayPauseControl = (
  ref: React.RefObject<HTMLVideoElement | null>,
) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const handleVideoPlay = () => {
    if (!ref || !(ref as React.RefObject<HTMLVideoElement>).current) return;

    const videoElement = (ref as React.RefObject<HTMLVideoElement>).current;

    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return {
    isPlaying,
    handleVideoPlay,
  };
};
