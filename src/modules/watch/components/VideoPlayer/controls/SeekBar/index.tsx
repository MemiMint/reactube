import React, { FC } from "react";

type SeekBarProps = {
  durationSec: number;
  currentTimeSec: number;
  onHandleSeekBar(event: React.ChangeEvent<HTMLInputElement>): void;
  onMouseMove(event: React.MouseEvent<HTMLInputElement>): void;
  onMouseLeave(): void;
};

export const SeekBar: FC<SeekBarProps> = ({
  currentTimeSec,
  durationSec,
  onHandleSeekBar,
  onMouseMove,
  onMouseLeave,
}) => {
  return (
    <input
      type="range"
      min={0}
      max={durationSec}
      step="0.1"
      value={currentTimeSec}
      onChange={onHandleSeekBar}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        background: `linear-gradient(to right, white ${(currentTimeSec / durationSec) * 100}%, gray ${(currentTimeSec / durationSec) * 100}%)`,
      }}
      className="w-full h-1 appearance-none rounded-full cursor-pointer
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:w-4 
      [&::-webkit-slider-thumb]:h-4 
      [&::-webkit-slider-thumb]:bg-white 
      [&::-webkit-slider-thumb]:rounded-full 
      [&::-webkit-slider-thumb]:shadow 
      [&::-webkit-slider-thumb]:transition-all 
      [&::-webkit-slider-thumb]:duration-150 
      [&::-webkit-slider-thumb]:ease-in-out 
      [&::-moz-range-thumb]:appearance-none 
      [&::-moz-range-thumb]:w-4 
      [&::-moz-range-thumb]:h-4 
      [&::-moz-range-thumb]:bg-white 
      [&::-moz-range-thumb]:rounded-full 
      [&::-moz-range-thumb]:shadow"
    />
  );
};
