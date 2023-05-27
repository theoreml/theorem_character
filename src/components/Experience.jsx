import { Environment, OrbitControls} from "@react-three/drei";
import { useControls } from "leva";
import { styled, keyframes } from 'leva/plugin';
import { Avatar } from "./Avatar";



export const Experience = () => {

  const {animation} = useControls({
    animation: {
      value: "Hypeboy",
      options: ["Hypeboy", "Goated", "Unforgiven"],
    },
    
  })

  return (
    <>
      <OrbitControls />
      {/* <Environment preset="lobby" intensity={1} /> */}


      <group position-y={-0.7}>
        <Avatar animation={animation}></Avatar>
      </group>
      <ambientLight intensity={0.6} />
      <pointLight intensity={0.4} position={[0, 10, 10]}/>
      <pointLight intensity={0.15} position={[-20, 10, 20]}/>
      <pointLight intensity={0.8} position={[-20, 10, -100]}/>
      <directionalLight intensity={1} position={[1, 1, 1]}/>
      
      
      
      
    </>
  );
};
