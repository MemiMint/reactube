import React, { FC } from "react";
import {
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeOff,
  FaVolumeMute,
} from "react-icons/fa";

const VolumeLevel: FC<{ volume: number; toggleMute(): void }> = ({
  volume,
  toggleMute,
}) => {
  return (
    <>
      {volume === 0 ? (
        <FaVolumeMute
          className="cursor-pointer"
          onClick={toggleMute}
          size={20}
          color="white"
        />
      ) : volume <= 0.3 ? (
        <FaVolumeOff
          className="cursor-pointer"
          onClick={toggleMute}
          size={20}
          color="white"
        />
      ) : volume <= 0.7 ? (
        <FaVolumeDown
          className="cursor-pointer"
          onClick={toggleMute}
          size={20}
          color="white"
        />
      ) : (
        <FaVolumeUp
          className="cursor-pointer"
          onClick={toggleMute}
          size={20}
          color="white"
        />
      )}
    </>
  );
};

const VolumeSlider: FC<{
  volume: number;
  onChangeVolume(event: React.ChangeEvent<HTMLInputElement>): void;
}> = ({ volume, onChangeVolume }) => {
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={onChangeVolume}
      style={{
        width: 60,
        background: `linear-gradient(to right, white ${volume * 100}%, gray ${volume * 100}%)`,
      }}
      className="appearance-none h-1 rounded outline-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-3 
            [&::-webkit-slider-thumb]:bg-white 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:shadow 
            [&::-webkit-slider-thumb]:transition-all 
            [&::-webkit-slider-thumb]:duration-150 
            [&::-webkit-slider-thumb]:ease-in-out 
            [&::-moz-range-thumb]:appearance-none 
            [&::-moz-range-thumb]:w-3 
            [&::-moz-range-thumb]:h-3 
            [&::-moz-range-thumb]:bg-white 
            [&::-moz-range-thumb]:rounded-full 
            [&::-moz-range-thumb]:shadow"
    />
  );
};

type VolumeControlProps = {
  volume: number;
  toggleMute(): void;
  onChangeVolume(event: React.ChangeEvent<HTMLInputElement>): void;
};

export const VolumeControl: FC<VolumeControlProps> = ({
  onChangeVolume,
  toggleMute,
  volume,
}) => {
  return (
    <div className="flex items-center gap-2">
      <VolumeLevel volume={volume} toggleMute={toggleMute} />
      <VolumeSlider volume={volume} onChangeVolume={onChangeVolume} />
    </div>
  );
};
