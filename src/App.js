import React from "react";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

import data from "./data";
const comments = data.comments();

const App = () => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            <ApprovalCard>
              <Comment
                avatar={comment.avatar}
                author={comment.author}
                date={comment.date}
                sentence={comment.sentence}
              />
            </ApprovalCard>
          </div>
        );
      })}
    </div>
  );
};

export default App;
