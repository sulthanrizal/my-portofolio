import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'

function lerp(a, b, t) {
  return a + (b - a) * t
}

function Blob() {
  const mesh = useRef()

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.12
    mesh.current.rotation.x = lerp(
      mesh.current.rotation.x,
      state.pointer.y * 0.35,
      0.04,
    )
    mesh.current.rotation.z = lerp(
      mesh.current.rotation.z,
      state.pointer.x * 0.25,
      0.04,
    )
  })

  return (
    <mesh ref={mesh} scale={1.35} position={[2.6, 0.2, -0.5]}>
      <icosahedronGeometry args={[1, 48]} />
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#1e1b4b"
        emissiveIntensity={0.4}
        distort={0.48}
        speed={1.6}
        roughness={0.25}
        metalness={0.35}
      />
    </mesh>
  )
}

function WireShell() {
  const mesh = useRef()

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y -= delta * 0.05
    mesh.current.rotation.x += delta * 0.02
  })

  return (
    <mesh ref={mesh} scale={2.1} position={[2.6, 0.2, -0.6]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.07} />
    </mesh>
  )
}

function Satellites() {
  return (
    <>
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={2}>
        <mesh position={[-4.2, 1.8, -1.5]} scale={0.28}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0e7490"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={1.8} floatIntensity={1.6}>
        <mesh position={[4.4, -1.6, -1]} scale={0.24}>
          <torusGeometry args={[1, 0.38, 16, 48]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#6d28d9"
            emissiveIntensity={0.5}
            roughness={0.25}
            metalness={0.85}
          />
        </mesh>
      </Float>
      <Float speed={2.8} rotationIntensity={1.2} floatIntensity={2.4}>
        <mesh position={[3.2, 2.2, -2.5]} scale={0.16}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#f472b6"
            emissive="#be185d"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </>
  )
}

function Rig({ children }) {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    group.current.position.x = lerp(group.current.position.x, state.pointer.x * 0.3, 0.03)
    group.current.position.y = lerp(group.current.position.y, state.pointer.y * 0.2, 0.03)
  })

  return <group ref={group}>{children}</group>
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
      eventPrefix="client"
    >
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 4, 6]} intensity={1.6} color="#c4b5fd" />
      <pointLight position={[6, 2, 3]} intensity={4} decay={0} color="#8b5cf6" />
      <pointLight position={[-3, -3, 4]} intensity={3} decay={0} color="#22d3ee" />
      <pointLight position={[1, 5, -2]} intensity={1.6} decay={0} color="#f472b6" />
      <Suspense fallback={null}>
        <Rig>
          <Blob />
          <WireShell />
          <Satellites />
          <Sparkles count={90} scale={10} size={2} speed={0.35} color="#a5b4fc" opacity={0.5} />
        </Rig>
      </Suspense>
    </Canvas>
  )
}
