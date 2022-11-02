import React from "react";
import posts from "./posts.json";
import PostListItem from "./post-list-item.js";

const PostList = () => {
  return (
      <>
        <ul className="list-group list-group-flush border-light">
          { posts.map((post, index) => {
            return (
                <PostListItem key={index} post={post}/>
            );
          })}
        </ul>
      </>
  )
}

export default PostList;