import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { Suspense } from 'react';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
          
          {/* Stars Background */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          
          {/* Floating Elements */}
          <Float speed={1} rotationIntensity={1} floatIntensity={2}>
            <FloatingCube position={[-3, 2, -2]} color="#8B5CF6" size={0.8} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
            <FloatingCube position={[3, -1, -3]} color="#06B6D4" size={0.6} />
          </Float>
          
          <Float speed={0.8} rotationIntensity={1.5} floatIntensity={3}>
            <FloatingCube position={[0, 3, -4]} color="#EC4899" size={0.4} />
          </Float>
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
            <FloatingCube position={[-2, -2, -1]} color="#10B981" size={0.5} />
          </Float>
          
          {/* Interactive Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};