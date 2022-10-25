
const PostListItem = (post) => {
  return (`
    <li class="list-group-item bg-black">
      <div class="row">
        <div class="col-1 mt-2">
          <img class="rounded-circle" style="height: 30px" src="${post.avatarIcon}"/>
        </div>
  
        <div class="col-11 mt-2">
          <div class="d-flex justify-content-between">
            <div>
              <span class="text-white">${post.username}</span>
              <i class="fa-solid fa-circle-check text-white"></i>
              <span class="text-secondary">@${post.handle}</span>
              <span class="text-secondary">&#183</span>
              <span class="text-secondary">${post.time}</span>
            </div>
            <div><i class="fas fa-ellipsis-h text-secondary"></i></div>
          </div>
  
          <div class="text-white">${post.message}</div>
  
<!--            <div class="card mt-2 border-secondary bg-black wd-post">-->
          <div class="card mt-2 bg-black border-secondary" style="border-radius: 15px; overflow: hidden">
            <img class="card-img-top border border-light" src="${post.image}"/><img>
            <div class="${post.hasContent? '': 'd-none'} card-body bg-black">
              <div class="card-title text-white m-0">${post.title}</div>
              <div class="card-text text-secondary">${post.content}</div>
              <a class="text-decoration-none text-secondary" href="#">
                <i class="fa-solid fa-link"></i>
                <span class="card-link">${post.link}</span>
              </a>
            </div>
          </div>
          
          <div class="row mt-2">
            <a class="col-3 text-decoration-none text-secondary" href="#">
              <i class="fa-regular fa-comment"></i>
              <span>${post.comments}</span>
            </a>
            
            <a class="col-3 text-decoration-none text-secondary" href="#">
                <i class="fa-solid fa-retweet"></i>
              <span>${post.retuits}</span>
            </a>
            
            <a class="col-3 text-decoration-none text-secondary" href="#">
                <i class="fa-regular fa-heart"></i>
              <span>${post.hearts}</span>
            </a>
            
            <a class="col-3 text-decoration-none text-secondary" href="#">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </a>
            
          </div>
        </div>
      <div>
    </div>
  `)
}

export default PostListItem;