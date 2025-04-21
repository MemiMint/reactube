import { parseQuantity } from "@modules/shared/utils/parse-quantity";
import { FC, useState } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

type LikesAndDislikesProps = {
  likes: number;
  dislikes: number;
};

export const LikesAndDislikes: FC<LikesAndDislikesProps> = (props) => {
  const [likes, setLikes] = useState<number>(props.likes);
  const [dislikes, setDislikes] = useState<number>(props.dislikes);

  const onAdd = (type: "like" | "dislike") => {
    if (type === "like") {
      setLikes((prevState) => prevState + 1);
    } else {
      setDislikes((prevState) => prevState + 1);
    }
  };

  return (
    <div className="flex items-center">
      <div
        onClick={() => onAdd("like")}
        className="select-none cursor-pointer p-2 flex items-center rounded-l-full border-r border-r-gray-400 bg-gray-200 gap-2  hover:bg-gray-300 transition"
      >
        <FiThumbsUp size={18} />
        <p className="font-secondary">{parseQuantity(likes)}</p>
      </div>
      <div
        onClick={() => onAdd("dislike")}
        className="select-none cursor-pointer p-2 flex items-center rounded-r-full bg-gray-200 gap-2 hover:bg-gray-300 transition"
      >
        <FiThumbsDown size={18} />
        <p className="font-secondary">{parseQuantity(dislikes)}</p>
      </div>
    </div>
  );
};
