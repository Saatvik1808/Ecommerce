import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Books = () => {
  const groupRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const modelPath = './kitab/scene.gltf';

    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      const bbox = new THREE.Box3().setFromObject(model); // Compute the bounding box
      const center = bbox.getCenter(new THREE.Vector3()); // Get the center of the bounding box
      model.position.sub(center); // Translate the model to be centered
      model.scale.set(0.2, 0.2, 0.2); // Adjust the scale of the model

      // Move the model upwards
      model.position.y = -2; // Adjust the vertical position as needed
      model.position.x = 1;
      model.position.z = -11;

      groupRef.current.add(model);
    });
  }, []);

  useFrame((state, delta) => {
    groupRef.current.rotation.y -= 0.035 * delta; // Rotate around y-axis
  });

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Camera */}
      <perspectiveCamera makeDefault position={[0, 1, 5]} fov={50} near={0.1} far={2000} />

      {/* Controls */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </group>
  );
};

const BooksScene = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <Books />
    </Canvas>
  );
};

export default BooksScene;
