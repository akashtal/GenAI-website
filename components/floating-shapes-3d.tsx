"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei"
import { useRef, useState, useMemo } from "react"
import type * as THREE from "three"

interface FloatingShapeProps {
  position: [number, number, number]
  color: string
  scale?: number
  shape: "sphere" | "torus" | "octahedron" | "icosahedron" | "dodecahedron"
  speed?: number
  distort?: number
}

function FloatingShape({ position, color, scale = 1, shape, speed = 1, distort = 0.3 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed
      meshRef.current.rotation.y += 0.005 * speed
      
      // Smooth scale transition on hover
      const targetScale = hovered ? scale * 1.2 : scale
      meshRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale } as THREE.Vector3,
        0.1
      )
    }
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case "sphere":
        return <sphereGeometry args={[1, 64, 64]} />
      case "torus":
        return <torusGeometry args={[1, 0.4, 32, 64]} />
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />
      default:
        return <sphereGeometry args={[1, 64, 64]} />
    }
  }, [shape])

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        {geometry}
        <MeshDistortMaterial
          color={hovered ? "#ffffff" : color}
          roughness={0.1}
          metalness={0.8}
          distort={hovered ? distort * 1.5 : distort}
          speed={2}
          transparent
          opacity={hovered ? 0.9 : 0.7}
        />
      </mesh>
    </Float>
  )
}

function WobbleShape({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      const targetScale = hovered ? scale * 1.3 : scale
      meshRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale } as THREE.Vector3,
        0.1
      )
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
        <MeshWobbleMaterial
          color={hovered ? "#ffffff" : color}
          factor={hovered ? 1 : 0.4}
          speed={hovered ? 4 : 2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={hovered ? 0.95 : 0.75}
        />
      </mesh>
    </Float>
  )
}

function MouseFollower() {
  const { viewport } = useThree()
  const meshRef = useRef<THREE.Mesh>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useFrame(({ pointer }) => {
    if (meshRef.current) {
      mousePosition.current.x = (pointer.x * viewport.width) / 2
      mousePosition.current.y = (pointer.y * viewport.height) / 2
      
      meshRef.current.position.x += (mousePosition.current.x - meshRef.current.position.x) * 0.05
      meshRef.current.position.y += (mousePosition.current.y - meshRef.current.position.y) * 0.05
      
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={0.15}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#6ee7b7"
        emissive="#6ee7b7"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.3} />
      
      {/* Main directional light */}
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      
      {/* Accent lights */}
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6ee7b7" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#f472b6" />
      
      {/* Floating shapes - positioned around the edges */}
      <FloatingShape
        position={[-4, 2, -2]}
        color="#6ee7b7"
        scale={0.6}
        shape="sphere"
        speed={1.2}
        distort={0.4}
      />
      <FloatingShape
        position={[4, -1.5, -3]}
        color="#f472b6"
        scale={0.5}
        shape="octahedron"
        speed={0.8}
        distort={0.2}
      />
      <FloatingShape
        position={[-3.5, -2, -1]}
        color="#818cf8"
        scale={0.45}
        shape="icosahedron"
        speed={1}
        distort={0.3}
      />
      <FloatingShape
        position={[3.5, 2.5, -2]}
        color="#fbbf24"
        scale={0.4}
        shape="dodecahedron"
        speed={1.5}
        distort={0.25}
      />
      <FloatingShape
        position={[-5, 0, -4]}
        color="#34d399"
        scale={0.35}
        shape="torus"
        speed={0.9}
        distort={0.15}
      />
      <FloatingShape
        position={[5, 0.5, -3]}
        color="#a78bfa"
        scale={0.5}
        shape="sphere"
        speed={1.1}
        distort={0.35}
      />
      
      {/* Wobble torus knot */}
      <WobbleShape position={[0, -3, -5]} color="#f97316" scale={0.4} />
      
      {/* Mouse follower */}
      <MouseFollower />
    </>
  )
}

export function FloatingShapes3D() {
  return (
    <div className="absolute inset-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
