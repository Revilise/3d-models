import * as THREE from "three";
import { ShapeProto } from "./ShapeProto";

export class ShapesFabric {
  static create(shape) {
    let shapeProto = new ShapeProto();

    const { type, color, geometry, position, rotation } = shape;
    switch (type) {
      case type.CUBE:
        shapeProto.Geometry = new THREE.BoxGeometry(...geometry);
        break;
      case type.SPHERE:
        shapeProto.Geometry = new THREE.SphereGeometry(...geometry);
        break;
      case type.PLATFORM:
        shapeProto.Geometry = new THREE.PlaneGeometry(...geometry);
        break;
      default:
        break;
    }

    shapeProto.Material = new THREE.MeshLambertMaterial({ color });
    shapeProto.Position = position;
    shapeProto.Rotation = rotation;

    return shapeProto.construct();
  }
}
