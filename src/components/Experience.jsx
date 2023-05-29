import { Environment, OrbitControls} from "@react-three/drei";
import { useControls } from "leva";

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
      <OrbitControls
      // minAzimuthAngle={-Math.PI / 4}
      // maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI - Math.PI / 2}
      
      />
      {/* <Environment preset="lobby" intensity={1} /> */}


      <group position-y={-0.7}>
        <Avatar animation={animation}></Avatar>
      </group>
      <ambientLight intensity={0.6} />
      <pointLight intensity={0.4} position={[0, 10, 10]}/>
      <pointLight intensity={0.15} position={[-20, 10, 20]}/>
      <pointLight intensity={0.8} position={[-20, 10, -100]}/>
      <directionalLight intensity={1} position={[1, 1, 1]}/>
      {/* Your 3D scene content */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="leva__container">
          <useControls
            // your controls configuration here
          />
        </div>
      </div> */}
    </>
  );  
      
    
  
};
