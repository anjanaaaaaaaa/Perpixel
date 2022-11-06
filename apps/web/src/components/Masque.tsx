import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

import Roboto from "../assets/fonts/Roboto_Regular.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

import { Text3D } from "@react-three/drei";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
function Text3d() {
  const font = new FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };
  return (
    <mesh>
      {/* <Text3D attach="geometry" font={Roboto} >
        Masque
        <meshStandardM
        aterial attach="material" color="hotpink" />
      </Text3D> */}
      <textGeometry
        attach="geometry"
        args={["masque", { font, size: 5, height: 1 }]}
      />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
export default function Masque() {
  return (
    <>
      <CameraController />
      <ambientLight />
      <Text3d />
    </>
  );
}
