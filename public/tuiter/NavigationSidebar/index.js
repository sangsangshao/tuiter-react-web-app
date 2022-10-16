const NavigationSidebar = (active) => {
  return(`
    <div class="list-group">
        <a class="list-group-item">
          <div class="row">
            <div class="col-2">
               <i class="fa-brands fa-twitter text-white"></i>
            </div>
          </div>
        </a>
        <a href="../HomeScreen/home.html" class="list-group-item ${active === 'home'? 'active': ''}">
          <div class="row">
            <div class="col-2">
             <i class="fa-solid fa-house text-white"></i>
            </div>
            <div class="d-none d-xl-block col-10">
              Home
            </div>
          </div>
        </a>
      <a href="../ExploreScreen/index.html" class="list-group-item ${active === 'explore'? 'active': ''}">
        <div class="row">
          <div class="col-2">
            <i class="fa-solid fa-hashtag text-white"></i>
          </div>
          <div class="d-none d-xl-block col-10">
            Explore
          </div>
        </div>
      </a>
      <a class="list-group-item ${active === 'notifications'? 'active': ''}">
        <div class="row">
          <div class="col-2">
            <i class="fa-solid fa-bell text-white"></i>
          </div>
          <div class="d-none d-xl-block col-10">
            Notifications
          </div>
        </div>
      </a>
      <a class="list-group-item ${active === 'messages'? 'active': ''}">
        <div class="row">
          <div class="col-2">
            <i class="fa-solid fa-envelope text-white"></i>
          </div>
          <div class="d-none d-xl-block col-10">
            Messages
          </div>
        </div>
      </a>
      <a class="list-group-item ${active === 'bookmarks'? 'active': ''}">
        <div class="row">
          <div class="col-2">
            <i class="fa-solid fa-bookmark text-white"></i>
          </div>
          <div class="d-none d-xl-block col-10">
            Bookmarks
          </div>
        </div>
      </a>
      <a class="list-group-item ${active === 'lists'? 'active': ''}">
        <div class="row">
          <div class="col-2">
            <i class="fa-solid fa-list text-white"></i>
          </div>
          <div class="d-none d-xl-block col-10">
            Lists
          </div>
        </div>
      </a>
      <a class="list-group-item ${active === 'profile'? 'active': ''}">
        <div class="row">
          <div class="col-2">
            <i class="fa-solid fa-user text-white"></i>
          </div>
          <div class="d-none d-xl-block col-10">
            Profile
          </div>
        </div>
      </a>
      <a class="list-group-item ${active === 'more'? 'active': ''}">
        <div class="row">
          <div class="col-2 wd-center">
             <i class="fa-solid fa-circle-ellipsis text-white"></i>
             <i class="fas fa-ellipsis-h fa-inverse bg-dark rounded-circle"></i>
<!--             <i class="fas fa-ellipsis-h fa-inverse bg-white rounded-circle"></i>-->
          </div>
          <div class="d-none d-xl-block col-10">
            More
          </div>
        </div>
      </a>
    </div>
    
    <div class="d-grid mt-2">
      <a href="../tuit.html" class="btn btn-primary rounded-pill">Tuit</a>
    </div>
    
    `);
}
export default NavigationSidebar;

