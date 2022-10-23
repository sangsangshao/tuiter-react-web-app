// import {Link} from "react-router-dom";
//
// export default () =>
//       <div>
//         <Link to="/">Labs</Link> |
//         <Link to="/hello">Hello</Link> |
//         <Link to="/tuiter">Tuiter</Link>
//       </div>
import {Link} from "react-router-dom";

function Nav() {
  return (
      <div>
        <Link to="/">Labs</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link>
      </div>
  )
}

export default Nav;