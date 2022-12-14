import { ShapeTypes } from "./ShapeTypes";

export const descriptions = [
  {
    type: ShapeTypes.CUBE,
    geometry: [4, 4, 4],
    material: {
      color: 0xff0000,
      wireframe: true
    },
    position: {
      x: -4,
      y: 3,
      z: 0
    }
  },
  {
    type: ShapeTypes.SPHERE,
    geometry: [4, 20, 20],
    material: {
      color: 0x7777ff,
      wireframe: true
    },
    position: {
      x: 20,
      y: 4,
      z: 2
    }
  },
  {
    type: ShapeTypes.PLATFORM,
    geometry: [60, 20, 1, 1],
    material: {
      color: 0xCCCCCC,
    },
    position: {
      x: 15,
      y: 0,
      z: 0
    },
    rotation: -0.5 * Math.PI
  }
];
