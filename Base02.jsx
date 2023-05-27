/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.12 public/models/base02.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/base02.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="avata_g" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Bip001} />
          <skinnedMesh name="body" geometry={nodes.body.geometry} material={materials['Material.005']} skeleton={nodes.body.skeleton} />
          <skinnedMesh name="cloth" geometry={nodes.cloth.geometry} material={materials['Material.011']} skeleton={nodes.cloth.skeleton} />
          <skinnedMesh name="eyeballL" geometry={nodes.eyeballL.geometry} material={materials['Material.009']} skeleton={nodes.eyeballL.skeleton} />
          <skinnedMesh name="eyeballR" geometry={nodes.eyeballR.geometry} material={materials['Material.009']} skeleton={nodes.eyeballR.skeleton} />
          <skinnedMesh name="eyebrow" geometry={nodes.eyebrow.geometry} material={materials['Material.006']} skeleton={nodes.eyebrow.skeleton} />
          <group name="hair">
            <skinnedMesh name="Mesh035" geometry={nodes.Mesh035.geometry} material={materials['Material.012']} skeleton={nodes.Mesh035.skeleton} />
            <skinnedMesh name="Mesh035_1" geometry={nodes.Mesh035_1.geometry} material={materials['Material.013']} skeleton={nodes.Mesh035_1.skeleton} />
          </group>
          <skinnedMesh name="teeth" geometry={nodes.teeth.geometry} material={materials['chars_body01.002']} skeleton={nodes.teeth.skeleton} />
          <skinnedMesh name="eyelash" geometry={nodes.eyelash.geometry} material={materials['Material.006']} skeleton={nodes.eyelash.skeleton} morphTargetDictionary={nodes.eyelash.morphTargetDictionary} morphTargetInfluences={nodes.eyelash.morphTargetInfluences} />
          <skinnedMesh name="head" geometry={nodes.head.geometry} material={materials['Material.005']} skeleton={nodes.head.skeleton} morphTargetDictionary={nodes.head.morphTargetDictionary} morphTargetInfluences={nodes.head.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/base02.glb')
