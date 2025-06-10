import { sec2min } from "@modules/shared/utils/sec2min";
import React, { useState } from "react";

export const useVideoPlayer = (
  ref: React.RefObject<HTMLVideoElement | null>,
) => {
  const [currentTime, setCurrentTime] = useState<number[]>([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [duration, setDuration] = useState<number[]>([0, 0]);
  const [durationSec, setDurationSec] = useState<number>(0);

  const onHandleRepeat = () => {
    const video = ref.current;

    if (!video) return;

    video.currentTime = 0;
    video.play();

    setCurrentTime([0, 0]);
    setCurrentTimeSec(0);
  };

  const onLoadVideoMetadata = () => {
    const video = ref.current;

    if (!video) return;

    setDurationSec(video.duration);
    const { min, sec } = sec2min(video!.duration);

    setDuration([min, sec]);
  };

  const onHandleTimeUpdate = () => {
    const video = ref.current;

    if (!video) return;

    setCurrentTimeSec(video.currentTime);
    const { min, sec } = sec2min(video!.currentTime);

    setCurrentTime([min, sec]);
  };

  return {
    currentTime,
    currentTimeSec,
    duration,
    durationSec,
    onLoadVideoMetadata,
    onHandleTimeUpdate,
    onHandleRepeat,
  };
};
