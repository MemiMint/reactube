import { FC } from "react";

export const RecommendedVideos: FC = () => {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-full h-24 bg-gray-200 rounded-md shadow-sm flex items-center justify-center text-sm text-gray-500"
        >
          Recommended {i + 1}
        </div>
      ))}
    </aside>
  );
};
