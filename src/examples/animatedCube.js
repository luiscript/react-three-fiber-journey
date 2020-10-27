import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { a, useSpring } from "@react-spring/three";

function Box(props) {
  const { offset, phase } = props;
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += phase / 100));

  const [active, setActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const translate = spring.to([0, 1], [offset, 5]);
  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([offset, 8], ["#6246ea", "#6246ea"]);

  return (
    <a.group ref={ref} position-y={translate}>
      <a.mesh
        scale-x={scale}
        scale-z={scale}
        onClick={() => setActive(Number(!active))}
      >
        <boxBufferGeometry attach="geometry" args={[1, 0.1, 10]} />
        <a.meshStandardMaterial
          roughness={0.5}
          attach="material"
          color={color}
        />
      </a.mesh>
    </a.group>
  );
}

export default Box;
