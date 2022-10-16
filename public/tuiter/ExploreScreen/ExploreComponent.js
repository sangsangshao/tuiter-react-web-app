import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="row m-0">
      <div class="col-10">
        <div class="position-relative">
          <i class="position-absolute wd-search-tuiter fa-solid fa-magnifying-glass"></i>
          <div><input class="ps-5 form-control rounded-pill wd-center" placeholder="Search Tuiter"/></div>
        </div>
        </div>
      <div class="col-2 wd-cog wd-center">
        <i class="fa-solid fa-gear text-primary fa-2x"></i>
      </div>
    </div>
    
    <ul class="nav nav-tabs mt-2">
      <li class="nav-item">
        <a class="nav-link bg-primary" href="#">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    
   <div class="position-relative">
      <img class="img-fluid mt-2" src="../../images/starship.jpg">
      <h1 class="position-absolute bottom-0 left-0 fw-bold text-black wd-title">SpaceX's Starship</h1>

   </div>
   
   <div class="mt-2">${PostSummaryList()}</div>
     
    `);
}
export default ExploreComponent;