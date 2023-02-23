import { Canvas } from '@react-three/fiber'
import { Color } from 'three'
import './App.css'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#E8D5C4"]} />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
