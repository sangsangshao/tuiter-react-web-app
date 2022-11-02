import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item.js";
import postsArray from './posts.json';
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const posts = useSelector(state => state.tuits)
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