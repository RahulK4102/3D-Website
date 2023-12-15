import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/home"
function App() {
  return (
    <main className="app transition-all" >
      <Canvas/>
      <Customizer/>
      <Home/>
    </main>
  )
}

export default App
