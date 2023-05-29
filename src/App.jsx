import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";



function App() {
  return (
    

    <Canvas shadows camera={{ position: [0, 0.5, 3], fov: 30 }}>
      <color attach="background" args={["black"]} />
      <Experience />
      


    </Canvas>
  );

}




export default App;
