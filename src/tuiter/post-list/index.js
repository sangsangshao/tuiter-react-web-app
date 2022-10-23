import React from "react";
import posts from "./posts.json";
import PostListItem from "./post-list-item";

const PostList = () => {
  return (
      <>
        <ul className="list-group list-group-flush border-light">
          { posts.map(post => {
            return (
                <PostListItem post={post}/>
            );
          })}
        </ul>
      </>
  )
}

export default PostList;