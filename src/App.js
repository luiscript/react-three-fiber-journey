import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.scss";

import Box from "./examples/animatedCube";
import SimpleCube from "./examples/simpleCube";

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-10, 10, 10], fov: 35 }}>
        <ambientLight />
        <pointLight position={[-10, 10, -10]} castShadow />
        <Box offset={2.0} phase={2.0} />
        <Box offset={1.8} phase={1.9} />
        <Box offset={1.6} phase={1.8} />
        <Box offset={1.4} phase={1.7} />
        <Box offset={1.2} phase={1.6} />
        <Box offset={1.0} phase={1.5} />
        <Box offset={0.8} phase={1.4} />
        <Box offset={0.6} phase={1.3} />
        <Box offset={0.4} phase={1.2} />
        <Box offset={0.2} phase={1.1} />
        <Box offset={0} phase={1.0} />
        <Box offset={-0.2} phase={0.9} />
        <Box offset={-0.4} phase={0.8} />
        <Box offset={-0.6} phase={0.7} />
        <Box offset={-0.8} phase={0.6} />
        <Box offset={-1.0} phase={0.5} />
        <Box offset={-1.2} phase={0.4} />
        <Box offset={-1.4} phase={0.3} />
        <Box offset={-1.6} phase={0.2} />
        <Box offset={-1.8} phase={0.1} />

        {/* <SimpleCube /> */}
      </Canvas>
    </>
  );
}

export default App;
