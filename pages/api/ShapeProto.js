import * as THREE from "three";

export class ShapeProto {
  set Material(value) {
    this.material = value;
  }
  set Geometry(value) {
    this.geometry = value;
  }
  set Position(value) {
    this.position = value;
  }
  set Rotation(value) {
    this.rotation = value;
  }
  construct() {
    const shape = new THREE.Mesh(this.geometry, this.material);

    if (this.rotation) {
      shape.rotation.x = this.rotation;
    }
    shape.position.x = this.position.x;
    shape.position.y = this.position.y;
    shape.position.z = this.position.z;

    return shape;
  }
}
