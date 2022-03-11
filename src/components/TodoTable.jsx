import { Component } from "react";
import InputBar from "./InputBar";
import TodoRow from "./TodoRow";
class TodoTable extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="todo-table">
        <header className="todo-table-head">
          <InputBar />
        </header>
        <div className="todo-table-body">
          <table>
            <tbody>
              <TodoRow />
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TodoTable
