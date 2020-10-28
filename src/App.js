import React from "react";
import { Canvas } from "react-three-fiber";
import { softShadows } from "drei";
import "./App.scss";

import Box from "./examples/animatedCube";
import SimpleCube from "./examples/simpleCube";
import Frame from "./examples/frame";

softShadows();

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, -15], fov: 50 }}
      >
        {/* <ambientLight intensity={0.1} /> */}

        <directionalLight
          castShadow
          position={[0, 20, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={100}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -5, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <Frame size={10} />
          <Frame size={9} />
          <Frame size={8} />
          <Frame size={7} />
          <Frame size={6} />
          <Frame size={5} />
          <Frame size={4} />
          <Frame size={3} />
          <Frame size={2} />
          <Frame size={1} />
        </group>

        {/* <SimpleCube /> */}
      </Canvas>
    </>
  );
}

export default App;
