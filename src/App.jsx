import ContentBoard from "./components/ContentBoard"
import Logo from "./components/Logo"
import TodoTable from "./components/TodoTable"

function App() {
  return (
    <div className="container">
      <ContentBoard
        logo={<Logo />}
        todoTable={<TodoTable />}
      />
    </div>
  )
}

export default App
