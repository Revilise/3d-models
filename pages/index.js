import React, { createRef, useEffect } from "react";
import * as THREE from "three";
import { ShapesController } from "./api/ShapesController";
import { descriptions } from "./api/ShapesDesctiprion";

export default function HomePage() {
  const ref = createRef();

  useEffect(() => {
    if (ref.current) {
      const { clientHeight, clientWidth } = ref.current;
      ShapesController.Renderer = {
        width: clientWidth,
        height: clientHeight,
        color: 0xEEEEEE
      };
      ref.current.appendChild(ShapesController.Renderer.domElement);

      ShapesController.createScene();
      ShapesController.customizeScene(
        (scene) => (scene.background = new THREE.Color("white"))
      );

      ShapesController.Camera = {
        width: clientWidth,
        height: clientHeight
      };
      ShapesController.CameraPosition = {
        x: -30,
        y: 40,
        z: 30
      };

      ShapesController.GenerateShapes(descriptions);
      ShapesController.AttachShape(
          new THREE.AxesHelper(20)
      );
      ShapesController.Render();
    }
  }, [ref.current]);

  return <div className="container" ref={ref}/>;
}
