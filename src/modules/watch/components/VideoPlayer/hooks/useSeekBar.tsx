import { useState } from "react";

export const useSeekBar = (ref: React.RefObject<HTMLVideoElement | null>) => {
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);

  const onHandleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(event.target.value);

    if (!ref || !(ref as React.RefObject<HTMLVideoElement>).current) return;

    const videoRef = ref as React.RefObject<HTMLVideoElement>;

    if (videoRef.current) videoRef.current.currentTime = time;

    setCurrentTimeSec(time);
  };

  return {
    currentTimeSec,
    onHandleSeek,
  };
};
