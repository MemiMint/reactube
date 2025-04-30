import { FC } from "react";

export const Comments: FC = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">600 Comments</h2>
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full bg-gray-100 rounded-lg p-4 text-sm text-gray-700"
          >
            Comment #{i + 1} placeholder
          </div>
        ))}
      </div>
    </div>
  );
};
