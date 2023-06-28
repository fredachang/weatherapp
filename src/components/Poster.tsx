import { animated, useSpring } from "@react-spring/three";
import { Object3DNode, useThree } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import notorious from "../assets/Super_Notorious_Regular.json";

extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

const fontColour = new THREE.Color("rgb(255, 255, 255)");
const posterColour = new THREE.Color("rgb(255, 0, 0)");

export function Poster(props: any) {
  const { staticScale, hoverScale, currentWeather, initialPosition } = props;
  const { size, viewport } = useThree();

  const font = new FontLoader().parse(notorious);

  const aspect = size.width / viewport.width;

  const [spring, set] = useSpring(() => ({
    scale: staticScale,
    position: initialPosition,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) =>
      set({
        position: [
          initialPosition[0] + x / aspect,
          initialPosition[1] - y / aspect,
          initialPosition[2],
        ],
      }),
    onHover: ({ hovering }) =>
      set({ scale: hovering ? hoverScale : staticScale }),
  });

  const cityName = currentWeather?.name;

  return (
    <animated.group {...props} {...spring} {...bind()} dispose={null}>
      <mesh position={[-0.7, 0.5, 0.2]}>
        <textGeometry
          args={["Weather Report", { font, size: 0.2, height: 0 }]}
        />
        <meshLambertMaterial attach="material" color={fontColour} />
      </mesh>

      <mesh position={[-0.7, 0, 0.2]}>
        <textGeometry args={[cityName || "", { font, size: 0.3, height: 0 }]} />
        <meshLambertMaterial attach="material" color={fontColour} />
      </mesh>

      <mesh>
        <planeBufferGeometry args={[2, 3]} />
        <meshStandardMaterial color={posterColour} />
      </mesh>
    </animated.group>
  );
}