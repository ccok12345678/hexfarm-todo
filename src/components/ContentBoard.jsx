import { Component } from "react"

class ContentBoard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="content-board">
        <div>
          {this.props.logo}
        </div>
        <div>
          {this.props.todoTable}
        </div>
      </main>
    )
  }
}

export default ContentBoard
