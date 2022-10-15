import React, { createRef, useEffect } from "react";
import * as THREE from "three";
import { ShapesController } from "./api/ShapesController";
import { descriptions, spotLight } from "./api/EntitiesDesctiprion";

export default function HomePage() {
  const ref = createRef();

  let step = 0;
  function animation() {
    const {findShape} = ShapesController;
    const cube = findShape(0);
    const sphere = findShape(1);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    step += 0.05;
    sphere.position.x = 20 + (10 * Math.cos(step));
    sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
  }

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
      ShapesController.AttachEntity(
          new THREE.AxesHelper(20)
      );
      ShapesController.AttachEntity(
          ShapesController.CreateSpotLight(spotLight)
      )
      ShapesController.Render({animation});
    }
  }, [ref.current]);

  return <div className="container" ref={ref}/>;
}
