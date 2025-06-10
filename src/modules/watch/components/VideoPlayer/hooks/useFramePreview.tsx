import { useEffect, useState } from "react";

export const useFramePreview = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  previewVideoRef: React.RefObject<HTMLVideoElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  durationSec: number,
) => {
  const [hoverX, setHoverX] = useState<number>(0);

  const handleSeekbarHover = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!containerRef.current) return;

    console.log("Hover at client x: ", e.clientX);

    const containerRect = containerRef.current.getBoundingClientRect();
    const seekbarRect = e.currentTarget.getBoundingClientRect();

    const percent = (e.clientX - seekbarRect.left) / seekbarRect.width;
    const previewTime = percent * durationSec;

    const previewVideo = previewVideoRef.current;
    if (!previewVideo) return;

    previewVideo.currentTime = previewTime;

    let x = e.clientX - containerRect.left;

    const canvasWidth = 160;

    // Limit outbounds of player
    if (x < canvasWidth / 2) x = canvasWidth / 2;
    if (x > containerRect.width - canvasWidth / 2)
      x = containerRect.width - canvasWidth / 2;

    setHoverX(x);
  };

  const onMouseLeave = () => setHoverX(0);

  useEffect(() => {
    const video = previewVideoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const onSeeked = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    video.addEventListener("seeked", onSeeked);
    return () => video.removeEventListener("seeked", onSeeked);
  }, [canvasRef, previewVideoRef]);

  return {
    hoverX,
    handleSeekbarHover,
    onMouseLeave,
  };
};
