import { FC } from "react";
import { Comment as IComment } from "@shared/types/comment";
import { Comment } from "../Comment";

export const CommentList: FC<{ comments?: IComment[] }> = ({ comments }) => {
  const hasComments = comments && comments.length > 0;

  return (
    <div className="mt-6 my-20">
      {hasComments ? (
        comments!.map((comment, index) => (
          <Comment
            key={index}
            avatarUrl={comment.avatarUrl}
            comment={comment.comment}
            timestamp={comment.timestamp}
            username={comment.username}
          />
        ))
      ) : (
        <p className="text-center text-lg">No comments yet</p>
      )}
    </div>
  );
};
