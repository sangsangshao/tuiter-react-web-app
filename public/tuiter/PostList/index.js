import posts from "./posts.js";
import PostListItem from "./PostListItem.js";

const PostList = () => {
  return (`
    <ul class="list-group list-group-flush border-light">
    ${ posts.map(post => {
    return PostListItem(post);
  }).join('')}
    </ul>
  `)
}

export default PostList;