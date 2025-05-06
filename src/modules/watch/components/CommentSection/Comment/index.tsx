import { FC, useState } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import type { Comment as IComment } from "@shared/types/comment";

export const Comment: FC<IComment> = ({
  username,
  avatarUrl,
  comment,
  timestamp,
}) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="flex gap-3 p-4">
      <img
        src={avatarUrl}
        alt={username}
        className="w-10 h-10 rounded-full object-cover"
      />

      <div className="flex flex-col flex-1">
        <div className="text-sm font-semibold">{username}</div>
        <div className="text-xs text-gray-500 mb-1">{timestamp}</div>
        <p className="text-sm whitespace-pre-wrap">{comment}</p>

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setLikes((prev) => prev + 1)}
          >
            <FiThumbsUp /> <p>{likes}</p>
          </button>
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDislikes((prev) => prev + 1)}
          >
            <FiThumbsDown /> <p>{dislikes}</p>
          </button>
          <button className="hover:underline">Reply</button>
        </div>
      </div>
    </div>
  );
};
