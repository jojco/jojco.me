<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import router from "~/router";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AmbientLight,
  PointLight,
} from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const threeParams = {
  width: 600,
  height: 600,
};

const scene = new Scene();

const ambientLight = new AmbientLight(0x404040);
const pointLight = new PointLight(0xff0000, 1, 100);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);
scene.add(ambientLight);

const camera = new PerspectiveCamera(
  75,
  threeParams.width / threeParams.height,
  0.1,
  1000
);
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
const loader = new GLTFLoader();

scene.add(cube);
loader.load(
  "./models/bonsai.glb",
  function (gltf) {
    scene.add(gltf.scene);
    gltf.animations;
    gltf.scene;
    gltf.scenes;
    gltf.cameras;
    gltf.asset;
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log(error, "An error happened");
  }
);

camera.position.z = 5;

const renderer = new WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(threeParams.width, threeParams.height);

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
  if (document.body.removeChild(renderer.domElement)) {
    document.body.removeChild(renderer.domElement);
    renderer.dispose();
  }
});
</script>
