import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.7;
mesh.position.y = 1;

// Adding to the scene
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  heigth: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth);
camera.position.z = 3;
camera.position.y = 1;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.heigth);

// Time
let time = Date.now();

// Animation

const tick = () => {
  // Time: this will help to normalise the speed of the animation
  // regardless of the framerate
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  // Update objects
  mesh.rotation.y += 0.001 * deltaTime;

  // Renderer
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
