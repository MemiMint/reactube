export const useSeekSkip = (ref: React.RefObject<HTMLVideoElement | null>) => {
  const handleSkip = (direction?: "forward" | "backwards") => {
    if (!ref || !(ref as React.RefObject<HTMLVideoElement>).current) return;

    const video = (ref as React.RefObject<HTMLVideoElement>).current;

    if (direction === "backwards") {
      video.currentTime -= 10;
    } else {
      video.currentTime += 10;
    }
  };

  return {
    handleSkip,
  };
};
