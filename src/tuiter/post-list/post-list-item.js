import React from "react";
import {formatText} from "./formatText.js";

const PostListItem = (
    {
      post = {
        "avatar": "../../../images/ElonMuskProfile.jpeg",
        "username": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "message": "Amazing show about",
        "image": "../../../images/ElonMuskPost.jpeg",
        "hasContent": true,
        "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "content": "From training to launch to landing, this all-across docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "link": "netflix.com",
        "comments": "4.2K",
        "retweets": "3.5K",
        "hearts": "37.5K"
      }
    }
    ) => {
  return (
        <li className="list-group-item">
          <div className="row">
            <div className="col-1 mt-2">
              <img className="rounded-circle" style={{height: "35px"}} src={post.avatar} alt=""/>
            </div>

            <div className="col-11 mt-2">
              <div className="d-flex justify-content-between">
                <div>
                  <span className="">{post.username} </span>
                  <span><i className="bi bi-check-circle-fill"></i> </span>
                  <span className="text-secondary">@{post.handle} </span>
                  <span className="text-secondary">&#183; </span>
                  <span className="text-secondary">{post.time}</span>
                </div>
                <div><i className="bi bi-three-dots"></i></div>
              </div>

              <div className="">{formatText(post.message)}</div>

              <div className="card mt-2 border-secondary wd-card">
                <img className="card-img-top border border-light" src={post.image} alt=""/>
                <div className={`${post.hasContent ? '':'d-none'} card-body`}>
                  <div className="card-title m-0">{post.title}</div>
                  <div className="card-text">{post.content}</div>
                  <a href="#" className="text-decoration-none text-secondary">
                    <span><i className="bi bi-link-45deg"></i> </span>
                    <span className="card-link">{post.link}</span>
                  </a>
                </div>
              </div>
              <div className="row mt-2">
                <a className="col-3 text-secondary text-decoration-none" href="#">
                  <span className="me-2"><i className="bi bi-chat"></i></span>
                  <span className="">{post.comments}</span></a>
                <a className="col-3 text-secondary text-decoration-none" href="#">
                  <span className="me-2"><i className="bi bi-repeat"></i></span>
                  <span className="">{post.retweets}</span>
                </a>
                <a className="col-3 text-secondary text-decoration-none" href="#">
                  <span className="me-2"><i className="bi bi-suit-heart"></i></span>
                  <span className="">{post.hearts}</span></a>
                <a className="col-3 text-secondary text-decoration-none" href="#">
                  <span className="me-2"><i className="bi bi-upload"></i></span>
                </a>
              </div>
            </div>
            <div>
            </div>
          </div>
        </li>
  )
}

export default PostListItem;