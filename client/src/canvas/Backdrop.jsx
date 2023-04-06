import React, { useRef } from 'react'
import { useSnapshot } from 'valtio'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

import state from '../store'

const Backdrop = () => {
  const snap = useSnapshot(state)
  const shadows = useRef()
  const isMobile = window.innerWidth <= 600
  return (
    !isMobile && (
      <AccumulativeShadows
        position={[0, 0, -0.14]}
        ref={shadows}
        temporal
        frames={30}
        alphaTest={0.85}
        scale={10}
        rotation={[Math.PI / 2, 0, 0]}>
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[5, 5, -10]}
        />
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.75}
          ambient={0.5}
          position={[-5, -5, -9]}
        />
      </AccumulativeShadows>
    )
  )
}

export default Backdrop
