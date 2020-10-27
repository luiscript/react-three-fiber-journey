import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Cube() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />{" "}
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default Cube;
