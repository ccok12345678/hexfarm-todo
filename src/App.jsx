import ContentBoard from "./components/ContentBoard"
import Logo from "./components/Logo"

function App() {
  return (
    <div className="container">
      <ContentBoard
        logo={ <Logo /> } />
    </div>
  )
}

export default App
