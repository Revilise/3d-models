import { ShapeTypes } from "./ShapeTypes";

export const descriptions = [
  {
    type: ShapeTypes.CUBE,
    geometry: [4, 4, 4],
    color: 0xff0000,
    position: {
      x: -4,
      y: -3,
      z: 0
    }
  },
  {
    type: ShapeTypes.SPHERE,
    geometry: [4, 20, 20],
    color: 0x7777ff,
    position: {
      x: 20,
      y: 4,
      z: 2
    }
  },
  {
    type: ShapeTypes.PLATFORM,
    geometry: [60, 20, 1, 1],
    color: 0xffffff,
    position: {
      x: 15,
      y: 0,
      z: 0
    },
    rotation: 0.5 * Math.PI
  }
];
