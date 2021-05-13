import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPostsAndUsers, posts }) => {
  //Unnecessary dependacy
  useEffect(() => {
    fetchPostsAndUsers();
  }, [fetchPostsAndUsers]);

  if (!posts || posts.length === 0) return <div>There's no posts to show!</div>;

  return (
    <div className="ui relaxed divided list">
      {posts.map((post) => {
        return (
          <div className="item" key={post.id}>
            <UserHeader userId={post.userId} />
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="description">{post.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return { posts: posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsers,
})(PostList);
