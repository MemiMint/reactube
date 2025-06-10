import { FC, useRef } from "react";
import { PlayPauseButton } from "./controls/PlayPauseButton";
import { SeekButtons } from "./controls/SeekButtons";
import { VolumeControl } from "./controls/Volume";
import { TimeDisplay } from "./controls/TimeDisplay";
import { FullScreen } from "./controls/FullScreen";
import { SeekBar } from "./controls/SeekBar";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import { useVolumeControl } from "./hooks/useVolume";
import { usePlayPauseControl } from "./hooks/usePlayPause";
import { useFullScreen } from "./hooks/useFullScreen";
import { useSeekSkip } from "./hooks/useSeekSkip";
import { useSeekBar } from "./hooks/useSeekBar";
import { Player } from "./Player";
import { RepeatButton } from "./controls/RepeatButton";
import { FramePreview } from "./FramePreview";
import { useFramePreview } from "./hooks/useFramePreview";

export const VideoPlayer: FC = () => {
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    currentTime,
    currentTimeSec,
    duration,
    durationSec,
    onHandleRepeat,
    onHandleTimeUpdate,
    onLoadVideoMetadata,
  } = useVideoPlayer(videoRef);
  const { onChangeVolume, toggleMute, volume } = useVolumeControl(videoRef);
  const { handleVideoPlay, isPlaying } = usePlayPauseControl(videoRef);
  const { handleFullScreen } = useFullScreen(containerRef);
  const { handleSkip } = useSeekSkip(videoRef);
  const { onHandleSeek } = useSeekBar(videoRef);
  const { hoverX, handleSeekbarHover, onMouseLeave } = useFramePreview(
    canvasRef,
    previewVideoRef,
    containerRef,
    durationSec,
  );

  return (
    <div
      ref={containerRef}
      onDoubleClick={handleFullScreen}
      className="relative w-full aspect-video rounded-lg overflow-hidden"
    >
      <Player
        src={"https://media.w3.org/2010/05/sintel/trailer.mp4"}
        muted={volume === 0}
        ref={videoRef}
        onClick={handleVideoPlay}
        onDoubleClick={handleFullScreen}
        onLoadMetadata={onLoadVideoMetadata}
        onTimeUpdate={onHandleTimeUpdate}
      />
      <div className="relative w-full">
        <FramePreview
          canvasRef={canvasRef}
          previewVideoRef={previewVideoRef}
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          hoverX={hoverX}
        />
      </div>
      <div className="absolute bottom-0 w-full bg-black/50 px-4 pt-2 space-y-2">
        {/* === Seek Bar === */}
        <SeekBar
          currentTimeSec={currentTimeSec}
          durationSec={durationSec}
          onHandleSeekBar={onHandleSeek}
          onMouseMove={handleSeekbarHover}
          onMouseLeave={onMouseLeave}
        />

        {/* === Controls === */}
        <div className="w-full h-12 bg-transparent flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            {currentTimeSec === durationSec ? (
              <RepeatButton onHandleRepeat={onHandleRepeat} />
            ) : (
              <PlayPauseButton
                isPlaying={isPlaying}
                onHandlePlay={handleVideoPlay}
              />
            )}

            {/* Seek Backward / Forward */}
            <SeekButtons handleSkip={handleSkip} />

            {/* Volume */}
            <VolumeControl
              volume={volume}
              onChangeVolume={onChangeVolume}
              toggleMute={toggleMute}
            />

            {/* Time display */}
            <TimeDisplay currentTime={currentTime} duration={duration} />
          </div>

          {/* Fullscreen */}
          <FullScreen handleFullScreen={handleFullScreen} />
        </div>
      </div>
    </div>
  );
};
