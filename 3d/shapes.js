import * as THREE from "three";

export default class Shapes {
  static Cube() {
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    return cube;
  }

  static Sphere() {
    const geometry = new THREE.SphereGeometry(4, 20, 20);
    const material = new THREE.MeshBasicMaterial({
      color: 0x7777ff,
      wireframe: true
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.y = 3;
    return sphere;
  }

  static Flat() {
    const geometry = new THREE.PlaneGeometry(60, 20, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -0.5 * Math.PI;

    return plane;
  }

  static Axes() {
    return new THREE.AxesHelper(20);
  }
}
