import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./Styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import TodoItem from "./todo/todo-item";

function Assignment6() {
  return (
      <>
        <Nav/>
        <h1>Assignment 6</h1>
        {/*<Assignment6/>*/}
        <TodoItem/>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </>
  );
}
export default Assignment6;