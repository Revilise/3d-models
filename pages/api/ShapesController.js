import * as THREE from "three";
import { ShapesFabric } from "./ShapesFabric";

export class ShapesController {
  static scene = null;
  static camera = null;
  static renderer = null;
  static shapes = [];

  static createScene() {
    ShapesController.scene = new THREE.Scene();
  }

  static customizeScene(fn) {
    fn(ShapesController.scene);
  }

  static set CameraPosition({ x, y, z }) {
    const { camera, scene } = ShapesController;
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.lookAt(scene.position);
  }

  static set Camera({ width, height }) {
    ShapesController.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      100
    );
  }

  static get Renderer() {
    return ShapesController.renderer;
  }
  static set Renderer({ width, height, color }) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(color));
    renderer.setSize(width, height);

    ShapesController.renderer = renderer;
  }

  static Render() {
    const { scene, camera, renderer } = ShapesController;
    renderer.render(scene, camera);
  }

  static GenerateShapes(descriptions) {
    for (let shape of descriptions) {
      ShapesController.AttachShape(ShapesFabric.create(shape));
    }
  }

  static AttachShape(value) {
    ShapesController.shapes.push(value);
    ShapesController.scene.add(value);
  }
}
