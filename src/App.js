import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import "./App.css";

function Cube() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 10, fov: 70 }}>
        <Cube />
      </Canvas>
    </>
  );
}

export default App;
