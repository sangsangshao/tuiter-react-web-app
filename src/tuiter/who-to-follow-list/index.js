import React from "react";
// import whos from './who.json'
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state)=> state.who);
  return (
        // <ul className="list-group">
        //   <li className="list-group-item">
        //     <div className="fw-bolder">Who to follow</div></li>
        //   { whos.map(who => { return (<WhoToFollowListItem who={who}/>);})
        <ul className="list-group">
        <li className="list-group-item"><div className="fw-bolder" style={{"fontSize":"2em"}}>Who to follow</div></li>
        { who.map(user => { return (<WhoToFollowListItem who={user}/>);})
          }
        </ul>
  )
}
export default WhoToFollowList;