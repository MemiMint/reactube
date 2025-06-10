import { FC } from "react";

export const TimeDisplay: FC<{
  currentTime: Array<number>;
  duration: Array<number>;
}> = ({ currentTime, duration }) => {
  return (
    <div className="flex items-center text-white select-none">
      <p className="font-primary text-sm">
        {currentTime[0]}:
        {currentTime[1] <= 9 ? `0${currentTime[1]}` : currentTime[1]} /{" "}
        {duration[0]}:{duration[1]}
      </p>
    </div>
  );
};
