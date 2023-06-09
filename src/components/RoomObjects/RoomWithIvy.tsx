/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 RoomWithIvy.gltf --transform --types
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    door_frame_1: THREE.Mesh;
    top_mirror_1: THREE.Mesh;
    bottom_mirro_1: THREE.Mesh;
    door_frame001_1: THREE.Mesh;
    top_mirror001_1: THREE.Mesh;
    bottom_mirro001_1: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    door_frame: THREE.Mesh;
    top_mirror: THREE.Mesh;
    bottom_mirro: THREE.Mesh;
    door_frame001: THREE.Mesh;
    top_mirror001: THREE.Mesh;
    bottom_mirro001: THREE.Mesh;
    IVY_Curve: THREE.Mesh;
    IvyLeaf: THREE.Mesh;
    IVY_Curve001: THREE.Mesh;
    IvyLeaf001: THREE.Mesh;
  };
  materials: {
    ["main door baked"]: THREE.MeshStandardMaterial;
    glass: THREE.MeshPhysicalMaterial;
    ["side door baked"]: THREE.MeshStandardMaterial;
    ["Terrazo(procedural baked)"]: THREE.MeshStandardMaterial;
    granular_concrete: THREE.MeshStandardMaterial;
    ["branch 1"]: THREE.MeshStandardMaterial;
    ["Leaf 1"]: THREE.MeshStandardMaterial;
  };
};

export function RoomWithIvy(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/RoomWithIvy-transformed.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[1.43, 0, 0]}>
        <mesh
          geometry={nodes.door_frame_1.geometry}
          material={materials["main door baked"]}
          position={[-0.3, -1.3, -0.04]}
        />
        <mesh
          geometry={nodes.top_mirror_1.geometry}
          material={materials.glass}
        />
        <mesh
          geometry={nodes.bottom_mirro_1.geometry}
          material={materials.glass}
        />
      </group>
      <group position={[4.47, 0, 0]}>
        <mesh
          geometry={nodes.door_frame001_1.geometry}
          material={materials["side door baked"]}
          position={[-1.81, -1.3, -0.01]}
        />
        <mesh
          geometry={nodes.top_mirror001_1.geometry}
          material={materials.glass}
        />
        <mesh
          geometry={nodes.bottom_mirro001_1.geometry}
          material={materials.glass}
        />
      </group>
      <mesh
        geometry={nodes.door_frame.geometry}
        material={materials["main door baked"]}
        position={[-0.3, -1.3, -0.04]}
      />
      <mesh geometry={nodes.top_mirror.geometry} material={materials.glass} />
      <mesh geometry={nodes.bottom_mirro.geometry} material={materials.glass} />
      <mesh
        geometry={nodes.door_frame001.geometry}
        material={materials["side door baked"]}
        position={[-1.81, -1.3, -0.01]}
      />
      <mesh
        geometry={nodes.top_mirror001.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.bottom_mirro001.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.IVY_Curve.geometry}
        material={materials["branch 1"]}
        position={[3.41, 0.28, 1.08]}
        rotation={[-0.27, 0, 0]}
      >
        <mesh
          geometry={nodes.IvyLeaf.geometry}
          material={materials["Leaf 1"]}
          position={[0, 0.51, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.IVY_Curve001.geometry}
        material={materials["branch 1"]}
        position={[0.04, 0, 0]}
      >
        <mesh
          geometry={nodes.IvyLeaf001.geometry}
          material={materials["Leaf 1"]}
          position={[0.06, -0.09, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Terrazo(procedural baked)"]}
      />
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials.granular_concrete}
      />
    </group>
  );
}

useGLTF.preload("/RoomWithIvy-transformed.glb");
