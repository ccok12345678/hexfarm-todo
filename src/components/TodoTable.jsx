import { Component } from "react";
import InputBar from "./InputBar";
import TodoRow from "./TodoRow";

function TableBody(props) {
  const rows = props.todos.map((todo) => {
    return (
      <TodoRow key={todo.id}
        content={todo}
        removeTodo={props.removeTodo}
      />
    )
  })
  return <tbody>{rows}</tbody>
}

class TodoTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    })
  }
  
  render() {
    const { todos } = this.state

    return (
      <div className="todo-table">
        <header className="todo-table-head">
          <InputBar addTodo={this.addTodo} />
        </header>
        <div className="todo-table-body">
          <table>
            <TableBody todos={todos}
              removeTodo={this.removeTodo} />
          </table>
        </div>
      </div>
    )
  }
}

export default TodoTable
