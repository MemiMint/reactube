import React, { FC, useState } from "react";
import { CommentList } from "./CommentList";
import { CommentTextField } from "./CommentTextField";
import { COMMENTS } from "@modules/mock/constants";
import { Comment } from "@shared/types/comment";

export const CommentSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>(COMMENTS);

  const addComment = (comment: string): void => {
    const newComment: Comment = {
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      timestamp: "A few seconds ago",
      username: "Test Username",
      comment: comment,
    };

    setComments((prevState) => [newComment, ...prevState]);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{comments.length} Comments</h2>
      <CommentTextField onAddComment={(comment) => addComment(comment)} />
      <CommentList comments={[]} />
    </div>
  );
};
