"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three-stdlib';

interface STLViewerProps {
  stlFile: string;
}

const STLViewer: React.FC<STLViewerProps> = ({ stlFile }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const light = new THREE.AmbientLight(0xffffff); // Soft white light
    scene.add(light);

    const loader = new STLLoader();
    loader.load(stlFile, (geometry) => {
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    }, undefined, (error) => {
      console.error('An error happened while loading the STL file:', error);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [stlFile]);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default STLViewer;