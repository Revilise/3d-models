import * as THREE from "three";
import { ShapeProto } from "./ShapeProto";
import {ShapeTypes} from "./ShapeTypes";

export class ShapesFabric {
  static create(shape) {
    let shapeProto = new ShapeProto();

    const { type, material, geometry, position, rotation } = shape;
    switch (type) {
      case ShapeTypes.CUBE:
        shapeProto.Geometry = new THREE.BoxGeometry(...geometry);
        break;
      case ShapeTypes.SPHERE:
        shapeProto.Geometry = new THREE.SphereGeometry(...geometry);
        break;
      case ShapeTypes.PLATFORM:
        shapeProto.Geometry = new THREE.PlaneGeometry(...geometry);
        break;
      default:
        break;
    }

    // shapeProto.Material = new THREE.MeshLambertMaterial(material);
    shapeProto.Material = new THREE.MeshBasicMaterial(material)
    shapeProto.Position = position;
    shapeProto.Rotation = rotation;

    return shapeProto.construct();
  }
}
