import * as THREE from "three";
import { useLayoutEffect } from "react";
import { Canvas, applyProps } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";

export default function Landing() {
  return (
    <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
      <Suzi rotation={[-0.63, 0, 0]} scale={2} position={[0, -1.175, 0]} />
      <AccumulativeShadows
        temporal
        frames={100}
        color="purple"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.9}
        opacity={0.8}
        scale={12}
        position={[0, -0.5, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </AccumulativeShadows>
      <mesh castShadow position={[-2, -0.245, 1]}>
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <mesh
        castShadow
        position={[2.5, -0.24, 1]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="indianred" />
      </mesh>
      <OrbitControls autoRotate={false} />
      <Environment preset="city" />
    </Canvas>
  );
}

function Suzi(props: any) {
  const { scene, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-high-poly/model.gltf"
  );
  useLayoutEffect(() => {
    scene.traverse(
      (obj: any) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
    applyProps(materials.default as any, {
      color: "orange",
      roughness: 0,
      normalMap: new THREE.CanvasTexture(
        new FlakesTexture(),
        THREE.UVMapping,
        THREE.RepeatWrapping,
        THREE.RepeatWrapping
      ),
      "normalMap-repeat": [40, 40],
      normalScale: [0.05, 0.05],
    });
  });
  return <primitive object={scene} {...props} />;
}
