import { Component } from "react";
import InputBar from "./InputBar";
import TodoRow from "./TodoRow";

function makeRows(todos, props) {
  return todos.map((todo) => {
    return (
      <TodoRow key={todo.id}
        content={todo}
        removeTodo={props.removeTodo}
        checkTodo={props.checkTodo}
      />
    )
  })
}

function TableBody(props) {
  const unDone = props.todos.filter((todo) => !todo.isDone)
  const done = props.todos.filter((todo) => todo.isDone)

  const unDoneRows = makeRows(unDone, props)
  const doneRows = makeRows(done, props)

  return <tbody>{unDoneRows}{doneRows}</tbody>
}

class TodoTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.localKey = 'farm-todo'
  }

  getLocalTodos = () => {
    return JSON.parse(localStorage.getItem(this.localKey))
  }
  componentDidMount() {
    const localTodos = this.getLocalTodos() || []
    this.setState({
      todos: localTodos
    })
  }

  setLocalTodos = (todos) => {
    localStorage.setItem(
      this.localKey,
      JSON.stringify(todos)
    )
  }

  addTodo = (todo) => {
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
    
    this.setLocalTodos(todos)
  }

  removeTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos
    })

    this.setLocalTodos(todos)
  }

  checkTodo = (id) => {
    const { todos } = this.state
    
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos[index].isDone = !todos[index].isDone
      }
    })

    this.setState({
      todos: [...todos]
    })

    this.setLocalTodos([...todos])
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
              removeTodo={this.removeTodo}
              checkTodo={this.checkTodo} />
          </table>
        </div>
      </div>
    )
  }
}

export default TodoTable
