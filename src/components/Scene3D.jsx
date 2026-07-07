import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'

function lerp(a, b, t) {
  return a + (b - a) * t
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

const CODE_LINES = [
  [
    { t: 'const', c: '#c084fc' },
    { t: ' developer ', c: '#e2e8f0' },
    { t: '= {', c: '#94a3b8' },
  ],
  [
    { t: '  name', c: '#7dd3fc' },
    { t: ': ', c: '#94a3b8' },
    { t: "'Sulthan Rizal H.I'", c: '#86efac' },
    { t: ',', c: '#94a3b8' },
  ],
  [
    { t: '  role', c: '#7dd3fc' },
    { t: ': ', c: '#94a3b8' },
    { t: "'Software Developer'", c: '#86efac' },
    { t: ',', c: '#94a3b8' },
  ],
  [
    { t: '  skills', c: '#7dd3fc' },
    { t: ': [', c: '#94a3b8' },
    { t: "'React'", c: '#86efac' },
    { t: ', ', c: '#94a3b8' },
    { t: "'JS'", c: '#86efac' },
    { t: '],', c: '#94a3b8' },
  ],
  [
    { t: '  coffee', c: '#7dd3fc' },
    { t: ': ', c: '#94a3b8' },
    { t: 'true', c: '#f472b6' },
    { t: ',', c: '#94a3b8' },
  ],
  [{ t: '}', c: '#94a3b8' }],
]

function makeCodeTexture() {
  const w = 640
  const h = 480
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, w, h)
  roundRect(ctx, 8, 8, w - 16, h - 16, 24)
  ctx.fillStyle = 'rgba(11, 16, 32, 0.92)'
  ctx.fill()
  ctx.strokeStyle = 'rgba(124, 58, 237, 0.7)'
  ctx.lineWidth = 3
  ctx.stroke()

  ctx.fillStyle = 'rgba(30, 27, 75, 0.8)'
  roundRect(ctx, 8, 8, w - 16, 64, 24)
  ctx.fill()
  ctx.fillRect(8, 48, w - 16, 24)

  const dots = ['#f87171', '#fbbf24', '#4ade80']
  dots.forEach((color, i) => {
    ctx.beginPath()
    ctx.arc(48 + i * 40, 40, 11, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  })

  ctx.font = '24px Menlo, Consolas, monospace'
  ctx.fillStyle = '#64748b'
  ctx.fillText('developer.js', w - 180, 48)

  ctx.font = '28px Menlo, Consolas, monospace'
  ctx.textBaseline = 'middle'
  const lineHeight = 56
  CODE_LINES.forEach((tokens, row) => {
    const y = 128 + row * lineHeight
    ctx.fillStyle = '#475569'
    ctx.fillText(String(row + 1), 40, y)
    let x = 88
    tokens.forEach(({ t, c }) => {
      ctx.fillStyle = c
      ctx.fillText(t, x, y)
      x += ctx.measureText(t).width
    })
  })

  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 8
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function makeSymbolTexture(symbol, color) {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, size, size)
  ctx.font = 'bold 110px Menlo, Consolas, monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = color
  ctx.shadowBlur = 32
  ctx.fillStyle = color
  ctx.fillText(symbol, size / 2, size / 2)
  ctx.fillText(symbol, size / 2, size / 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 8
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function CodeWindow({ position, scale = 1, tilt = -0.28 }) {
  const mesh = useRef()
  const texture = useMemo(() => makeCodeTexture(), [])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = lerp(
      mesh.current.rotation.y,
      tilt + state.pointer.x * 0.25,
      0.04,
    )
    mesh.current.rotation.x = lerp(
      mesh.current.rotation.x,
      state.pointer.y * 0.2,
      0.04,
    )
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.12
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <planeGeometry args={[3.1, 2.32]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  )
}

function WireShell({ position, scale }) {
  const mesh = useRef()

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y -= delta * 0.05
    mesh.current.rotation.x += delta * 0.02
  })

  return (
    <mesh ref={mesh} scale={scale} position={position}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.07} />
    </mesh>
  )
}

function CodeSymbol({ symbol, color, position, scale, float }) {
  const texture = useMemo(() => makeSymbolTexture(symbol, color), [symbol, color])

  return (
    <Float speed={float.speed} rotationIntensity={0.6} floatIntensity={float.intensity}>
      <mesh position={position} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} toneMapped={false} />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  const { width: vw, height: vh } = useThree((state) => state.viewport)
  const compact = vw < 5.5

  const winScale = compact ? Math.min(1, (vw * 0.94) / 3.1) : 1
  const winPos = compact ? [0, vh * 0.22, -0.5] : [2.3, 0.2, -0.5]

  const symbols = compact
    ? [
        { symbol: '</>', color: '#22d3ee', position: [-vw * 0.32, vh * 0.38, -1.5], scale: 0.7, float: { speed: 2.2, intensity: 1.4 } },
        { symbol: '{ }', color: '#a78bfa', position: [vw * 0.34, -vh * 0.3, -1], scale: 0.55, float: { speed: 1.6, intensity: 1.2 } },
        { symbol: '=>', color: '#f472b6', position: [vw * 0.3, vh * 0.44, -2.2], scale: 0.45, float: { speed: 2.8, intensity: 1.6 } },
        { symbol: ';', color: '#86efac', position: [-vw * 0.28, -vh * 0.36, -2], scale: 0.4, float: { speed: 2, intensity: 1.4 } },
      ]
    : [
        { symbol: '</>', color: '#22d3ee', position: [-4.2, 1.8, -1.5], scale: 1.1, float: { speed: 2.2, intensity: 2 } },
        { symbol: '{ }', color: '#a78bfa', position: [4.4, -1.6, -1], scale: 0.9, float: { speed: 1.6, intensity: 1.6 } },
        { symbol: '=>', color: '#f472b6', position: [3.4, 2.3, -2.2], scale: 0.7, float: { speed: 2.8, intensity: 2.4 } },
        { symbol: ';', color: '#86efac', position: [-4.4, -2.2, -2], scale: 0.6, float: { speed: 2, intensity: 2.2 } },
      ]

  return (
    <>
      <CodeWindow
        position={winPos}
        scale={winScale}
        tilt={compact ? 0 : -0.28}
      />
      <WireShell
        position={compact ? [0, 0.3, -0.9] : [2.6, 0.2, -0.8]}
        scale={compact ? 1.5 : 2.4}
      />
      {symbols.map((s) => (
        <CodeSymbol key={s.symbol} {...s} />
      ))}
      <Sparkles
        count={90}
        scale={compact ? 7 : 10}
        size={2}
        speed={0.35}
        color="#a5b4fc"
        opacity={0.5}
      />
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
          <SceneContent />
        </Rig>
      </Suspense>
    </Canvas>
  )
}
