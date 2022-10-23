import Assignment6 from "./a6";
import Nav from "../nav";
import Classes from "./a6/classes";
import Styles from "./a6/Styles";
import ConditionalOutput from "./a6/conditional-output";
import TodoItem from "./a6/todo/todo-item";
import TodoList from "./a6/todo/todo-list";



function Labs() {
  return (
      <div>
        {/*<h1>Labs</h1>*/}
        {/*<h1>Assignment 6</h1>*/}
        {/*<Nav/>*/}
        <Assignment6/>
        <TodoItem/>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </div>
  )
}
export default Labs;
