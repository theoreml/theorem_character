import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";


function App() {
  return (
    

    <Canvas shadows camera={{ position: [0, 0.5, 4], fov: 30 }}>
      <color attach="background" args={["transparent"]} />
      <Experience />



    </Canvas>
  );

}

export default App;
