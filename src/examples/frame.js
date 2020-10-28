import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { a, useSpring } from "@react-spring/three";

function Frame(props) {
  const { size } = props;
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x += size / 1000));

  const [active, setActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const translate = spring.to([0, 1], [1, 5]);
  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([1, 8], ["#6246ea", "#6246ea"]);

  return (
    <a.group ref={ref}>
      <a.group position-x={size / 2}>
        <a.mesh
          castShadow
          receiveShadow
          scale-x={scale}
          scale-z={scale}
          onClick={() => setActive(Number(!active))}
        >
          <boxBufferGeometry attach="geometry" args={[0.5, size + 0.5, 0.2]} />
          <a.meshStandardMaterial
            roughness={0.5}
            attach="material"
            color={"#000"}
          />
        </a.mesh>
      </a.group>

      <a.group ref={ref} position-x={-(size / 2)}>
        <a.mesh
          castShadow
          receiveShadow
          scale-x={scale}
          scale-z={scale}
          onClick={() => setActive(Number(!active))}
        >
          <boxBufferGeometry attach="geometry" args={[0.5, size + 0.5, 0.2]} />
          <a.meshStandardMaterial
            roughness={0.5}
            attach="material"
            color={"#000"}
          />
        </a.mesh>
      </a.group>

      <a.group ref={ref} position-y={size / 2}>
        <a.mesh
          castShadow
          receiveShadow
          scale-x={scale}
          scale-z={scale}
          onClick={() => setActive(Number(!active))}
        >
          <boxBufferGeometry attach="geometry" args={[size + 0.5, 0.5, 0.2]} />
          <a.meshStandardMaterial
            roughness={0.5}
            attach="material"
            color={"#000"}
          />
        </a.mesh>
      </a.group>
      <a.group ref={ref} position-y={-(size / 2)}>
        <a.mesh
          castShadow
          receiveShadow
          scale-x={scale}
          scale-z={scale}
          onClick={() => setActive(Number(!active))}
        >
          <boxBufferGeometry attach="geometry" args={[size + 0.5, 0.5, 0.2]} />
          <a.meshStandardMaterial
            roughness={0.5}
            attach="material"
            color={"#000"}
          />
        </a.mesh>
      </a.group>
    </a.group>
  );
}

export default Frame;
