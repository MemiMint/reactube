import { useState } from "react";

export const useVolumeControl = (
  ref: React.RefObject<HTMLVideoElement | null>,
) => {
  const [volume, setVolume] = useState<number>(0);
  const [previousVolume, setPreviousVolume] = useState<number>(1);

  const toggleMute = () => {
    const video = ref.current;
    if (!video) return;

    if (video.muted || volume === 0) {
      video.muted = false;
      video.volume = previousVolume;
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      video.muted = true;
      video.volume = 0;
      setVolume(0);
    }
  };

  const onChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = ref.current;
    if (!video) return;

    const fVolume = parseFloat(event.target.value);

    video.muted = false;
    video.volume = fVolume;
    setVolume(fVolume);
    setPreviousVolume(fVolume);
  };

  return {
    volume,
    toggleMute,
    onChangeVolume,
  };
};
