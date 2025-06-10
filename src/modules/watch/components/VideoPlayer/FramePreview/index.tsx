import React, { FC } from "react";

interface FramePreviewProps {
  previewVideoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  src: string;
  hoverX: number;
}

export const FramePreview: FC<FramePreviewProps> = ({
  src,
  hoverX,
  canvasRef,
  previewVideoRef,
}) => {
  return (
    <>
      <video
        ref={previewVideoRef}
        src={src}
        muted
        className="hidden"
        preload="auto"
      />
      <canvas
        ref={canvasRef}
        width={160}
        height={90}
        style={{
          position: "absolute",
          bottom: "80px",
          //top: `-${hoverY}px`,
          left: `${hoverX}px`,
          transform: "translate(-50%, 0)", // centrar horizontalmente el canvas respecto al mouse
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
          display: hoverX === 0 ? "none" : "block",
          zIndex: 10,
          pointerEvents: "none",
          borderRadius: "4px",
          backgroundColor: "#000", // Opcional, para evitar flashes
        }}
      />
    </>
  );
};
