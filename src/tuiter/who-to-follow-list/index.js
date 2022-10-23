import React from "react";
import whos from './who.json'
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return (
        <ul className="list-group">
          <li className="list-group-item">
            <div className="fw-bolder">Who to follow</div></li>
          { whos.map(who => { return (<WhoToFollowListItem who={who}/>);})
          }
        </ul>
  )
}
export default WhoToFollowList;