import React from "react";

export const useFullScreen = (ref: React.RefObject<HTMLDivElement | null>) => {
  const handleFullScreen = () => {
    if (!ref || !(ref as React.RefObject<HTMLDivElement>).current) return;

    const container = ref as React.RefObject<HTMLDivElement>;

    if (document.fullscreenElement) document.exitFullscreen();
    else
      container.current
        .requestFullscreen()
        .catch((err) => console.error("Failed to enter fullscreen: ", err));
  };

  return {
    handleFullScreen,
  };
};
