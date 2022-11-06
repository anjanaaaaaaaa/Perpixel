import React from "react";

import { Canvas, useFrame } from "@react-three/fiber";

const Profile = () => {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 10]} color="red" />
        <mesh>
          <boxGeometry>
            <meshStandardMaterial />
          </boxGeometry>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Profile;
