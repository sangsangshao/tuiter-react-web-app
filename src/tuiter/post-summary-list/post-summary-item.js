import React from "react";

const PostSummaryItem = (
    {
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/reactlogo.png"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div className="border-secondary">{post.topic}</div>
            <div>
              <span className="fw-bolder">{post.userName} </span>
              <span><i className="bi bi-check-circle-fill"></i></span>
              <span>- </span>
              <span>{post.time}</span>
            </div>
            <div className="fw-bolder">{post.title}</div>
          </div>
          <div className="col-2 wd-center">
            <img width={70} className="img-fluid rounded-3" src={`/images/${post.image}`}alt=""/>
            {/*<img width={50} className="float-end rounded-3" src={`/images/${post.image}`}alt=""/>*/}
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;

// import React from "react";
//
// const PostSummaryListItem = ({
//   post = {
//     "topic": "Web Development",
//     "userName": "ReactJS",
//     "time": "2h",
//     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//     "image": "../../../images/reatlogo.png"
//   }}) => {
//   return (
//       <>
//         <li className="list-group-item">
//           <div className="row">
//             <div className="col-10">
//               <div>{post.topic}</div>
//               <div>
//                 <span className="wd-bold">{post.userName} </span>
//                 <span><i className="fas fa-check-circle"></i> </span>
//                 <span>- </span>
//                 <span>{post.time}</span>
//               </div>
//               <div className="wd-bold">{post.title}</div>
//             </div>
//             <div className="col-2 wd-center">
//               <img className="float-end rounded" src={`/images/${post.image}`}/>
//             </div>
//           </div>
//         </li>
//       </>
//   )
// }
//
// export default PostSummaryListItem;