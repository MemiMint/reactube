import type { FC } from "react";
import { FaVideo } from "react-icons/fa";

export const CreateVideo: FC = () => {
  return (
    <div className="cursor-pointer flex items-center justify-center gap-2 p-2 text-sm font-bold rounded-md border-2 text-blue-600 border-blue-600 font-primary">
      <FaVideo size={14} />
      <p>Create a video</p>
    </div>
  );
};
