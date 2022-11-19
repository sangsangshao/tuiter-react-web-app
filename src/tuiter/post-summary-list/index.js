import React, {useEffect} from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item.js";
import postsArray from './posts.json';
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
  // const posts = useSelector(state => state.tuits)
  // return (
  //     <>
  //       <ul className="list-group wd-post-summary">
  //         { posts?.map((post, index) => {
  //           return (
  //               <PostSummaryItem key={index} post={post}/>
  //           );
  //         })}
  //       </ul>
  //     </>
  // )
  const{tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [dispatch])
  return (
    <ul className="list-group">
      {
        loading &&
          <li className="list-group-item">
            Loading...
          </li>
      }
      {
        tuits.map(post =>
        <PostSummaryItem
          key={post._id} post={post}/>)
      }
    </ul>
  );
}

export default PostSummaryList;