// import Assignment6 from "./a6";
// import Nav from "../nav";
// import Classes from "./a6/classes";
// import Styles from "./a6/Styles";
// import ConditionalOutput from "./a6/conditional-output";
// import TodoItem from "./a6/todo/todo-item";
// import TodoList from "./a6/todo/todo-list";
// import Assignment7 from "./a7";
//
//
//
// function Labs() {
//   return (
//       <div>
//         {/*<h1>Labs</h1>*/}
//         {/*<h1>Assignment 6</h1>*/}
//         {/*<Nav/>*/}
//         <Assignment6/>
//         {/*<TodoItem/>*/}
//         {/*<TodoList/>*/}
//         {/*<ConditionalOutput/>*/}
//         {/*<Styles/>*/}
//         {/*<Classes/>*/}
//
//         {/*<Assignment7/>*/}
//       </div>
//   )
// }
// export default Labs;

import Nav from "../nav";

import {Routes, Route} from "react-router";
import Assignment7 from "./a7";
import Assignment6 from "./a6";

function Labs() {
  return (
      <div>
        <Nav/>
        <Routes>
          <Route index
                 element={<Assignment6/>}/>
          <Route path="/a7"
                 element={<Assignment7/>}/>
        </Routes>
      </div>
  );
}
export default Labs;