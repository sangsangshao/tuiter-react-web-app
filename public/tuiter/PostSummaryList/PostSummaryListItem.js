const PostSummaryListItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-10 text-secondary">
          <div>${post.topic}</div>
          <div>
            <span class="fw-bold text-white">${post.userName}</span>
            <i class="fa-solid fa-check-circle text-white"></i>
            <span>-</span>
            <span>${post.time}</span>
          </div>
          <div class="fw-bold text-white">${post.title}</div>
        </div>
        <div class="col-2 wd-center">
          <img class="img-fluid rounded" src="${post.image}"/>
        </div>
      </div>
    </li>
  `)
}

export default PostSummaryListItem;