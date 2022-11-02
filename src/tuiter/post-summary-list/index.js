import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item.js";

const PostSummaryList = () => {
  return (
      <>
        <ul className="list-group wd-post-summary">
          { posts.map((post, index) => {
            return (
                <PostSummaryItem key={index} post={post}/>
            );
          })}
        </ul>
      </>
  )
}

export default PostSummaryList;