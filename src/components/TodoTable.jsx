import { Component } from "react";
import InputBar from "./InputBar";

class TodoTable extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="todo-table">
        <div>
          <InputBar />
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default TodoTable
