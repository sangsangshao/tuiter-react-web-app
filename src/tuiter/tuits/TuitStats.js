import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  // console.log(tuit)
  const likeClickHandler = (tuit) => {
    dispatch(likeTuit(tuit));
  }
  return (
      <div className="row mt-2">
        <div className="col-2 text-secondary text-decoration-none" href="#">
          <span className="me-2"><i className="bi bi-chat"></i></span>
          <span className="">{tuit.comments}</span></div>
        <div className="col-2 text-secondary text-decoration-none" href="#">
          <span className="me-2"><i className="bi bi-repeat"></i></span>
          <span className="">{tuit.retuits}</span>
        </div>
        {/*<div className="col-3 text-secondary text-decoration-none" onClick={() => likeClickHandler(tuit._id)}>*/}
        {/*  <span className="me-2"> {*/}
        {/*      tuit.stats.liked && <i className="bi bi-heart-fill" style={{color: tuit.stats?.liked ? "red": "white"}}></i>*/}
        {/*  }*/}
        {/*  {*/}
        {/*    !tuit.stats.liked && <i className="bi bi-heart-fill"></i>*/}
        {/*  }</span>*/}
        {/*  <span className="">{tuit.stats?.likes}</span>*/}
        {/*</div>*/}
        {/*{tuit.tuit}*/}
        <div className="col-2 text-secondary text-decoration-none" href="#">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"></i>
          {/*Likes: {tuit.likes}*/}
          {tuit.likes}
        </div>

        <div className="col-2 text-secondary text-decoration-none" href="#">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
          }))} className="bi bi-hand-thumbs-down me-2"></i>
          {/*Dislikes: {tuit.dislikes}*/}
          {tuit.dislikes}
        </div>

        <div className="col-2 text-secondary text-decoration-none" href="#">
          <span className="me-2"><i className="bi bi-upload"></i></span>
        </div>
        {/*<div className="col">*/}
        {/*</div>*/}
      </div>
  );
}
export default TuitStats;