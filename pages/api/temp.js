// const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

// let renderer;

// const scene = new THREE.Scene();

// function customScene() {
//   scene.background = new THREE.Color("white");
// }
// function insertShapes(shapes) {
//   for (let shape of shapes) {
//     scene.add(shape);
//   }
// }

// function render() {
//   if (ref.current) {
//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);

//     const axes = Shapes.Axes();
//     const cube = Shapes.Cube();
//     const sphere = Shapes.Sphere();
//     const flat = Shapes.Flat();

//     ref.current.appendChild(renderer.domElement);

//     camera.position.x = 5;
//     camera.position.z = 5;
//     camera.position.y = 15;
//     camera.lookAt(scene.position);

//     customScene();
//     insertShapes([cube, sphere, axes, flat]);

//     renderer.render(scene, camera);
//   }
// }

// useEffect(render, [ref.current]);
