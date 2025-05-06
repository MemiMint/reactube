import React, { FC, useState } from "react";
import { MdEmojiEmotions, MdOutlineEmojiEmotions } from "react-icons/md";
import { EmojiPicker } from "./EmojiPicker";

type CommentTextFieldProps = {
  onAddComment(comment: string): void;
};

export const CommentTextField: FC<CommentTextFieldProps> = ({
  onAddComment,
}) => {
  const [comment, setComment] = useState<string>("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);

  const onToggleEmojiPicker = () => setIsEmojiPickerOpen(!isEmojiPickerOpen);

  return (
    <div className="w-full bg-gray-100 rounded-md pb-2">
      <div className="flex w-full h-full">
        <div className="w-12 h-12 rounded-full p-2 gap-2">
          <img
            className="rounded-full"
            src="https://i.pravatar.cc/150?img=10"
          />
        </div>
        <div className="w-full">
          <textarea
            className="outline-none resize-none font-secondary font-medium w-full h-32 p-2"
            placeholder="Enter your comment"
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end px-4 gap-2">
        <div className="relative">
          {isEmojiPickerOpen ? (
            <MdEmojiEmotions
              className="cursor-pointer"
              style={{ userSelect: "none" }}
              size={24}
              onClick={onToggleEmojiPicker}
            />
          ) : (
            <MdOutlineEmojiEmotions
              className="cursor-pointer"
              style={{ userSelect: "none" }}
              size={24}
              onClick={onToggleEmojiPicker}
            />
          )}
          {isEmojiPickerOpen && (
            <EmojiPicker
              onChange={(emoji) => setComment((prevState) => prevState + emoji)}
            />
          )}
        </div>
        <button
          onClick={() => {
            onAddComment(comment);
            setComment("");
          }}
          disabled={!comment.trim()}
          className={`ml-2 px-4 h-9 font-semibold rounded-lg shadow transition duration-200 ${!comment.trim() ? "bg-blue-300 text-white cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"}`}
        >
          Send
        </button>
      </div>
    </div>
  );
};
