import { FC } from "react";
import { MdFullscreen } from "react-icons/md";

type FullScreenProps = {
  handleFullScreen(): void;
};

export const FullScreen: FC<FullScreenProps> = ({ handleFullScreen }) => {
  return (
    <div className="flex items-center">
      <MdFullscreen
        className="cursor-pointer"
        size={28}
        color="white"
        onClick={handleFullScreen}
      />
    </div>
  );
};
