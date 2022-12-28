<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";
import router from "~/router";

const scene = new Scene();
const camera = new PerspectiveCamera(75, 400 / 400, 0.1, 1000);
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(400, 400);

const controls = new ArcballControls(camera, renderer.domElement, scene);
controls.setGizmosVisible(false);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();

onMounted(() => {
  document.body.appendChild(renderer.domElement);
});

router.beforeEach(() => {
  renderer.dispose();
});
</script>
