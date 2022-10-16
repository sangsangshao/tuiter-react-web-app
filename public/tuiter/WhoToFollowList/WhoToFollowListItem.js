const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
      <div class="row wd-center">
        <div class="col-2">
          <img class="img-fluid rounded-circle" src="${who.avatarIcon}"/>
        </div>
        <div class="col-lg-6 col-xl-7 p-0">
          <div>
            <span class="wd-bold-text text-white">${who.userName}</span>
            <span>
              <i class="fa-solid fa-circle-check text-white"></i>
            </span>
          </div>
          <div class="wd-text">@${who.handle}</div>
        </div>
        <div class="col-lg-4 col-xl-3 wd-center">
          <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  
  `)
}

export default WhoToFollowListItem;