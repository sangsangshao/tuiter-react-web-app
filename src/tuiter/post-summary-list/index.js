import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
      <>
        <ul className="list-group wd-post-summary">
          { posts.map(post => {
            return (
                <PostSummaryItem post={post}/>
            );
          })}
        </ul>
      </>
  )
}

export default PostSummaryList;