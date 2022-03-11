import { Component } from "react"

class InputBar extends Component {
  initiateState = { todo: ''}

  constructor(props) {
    super(props)
    this.state = this.initiateState
  }


  handleChange = (event) => {
    this.setState({
      todo: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const todo = this.state.todo.trim()
    if (todo === '') {
      this.setState(this.initiateState)
      return
    }
    
    this.props.addTodo({
      id: Date.now(),
      todo,
      isDone: false
    })
    this.setState(this.initiateState)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo"
          className="form-label"
        >輸入代辦事項：</label>
        <input type="text" id="todo"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="輸入事項..."
          className="form-input"/>
        <button type="submit"
          className="form-submit">加入代辦</button>
      </form>
    )
  }
}

export default InputBar
