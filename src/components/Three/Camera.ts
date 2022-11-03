import { defineComponent, inject, PropType } from "vue";
import { PerspectiveCamera } from "three";
import { RendererInjectionKey } from "./Renderer";

export interface Vector2PropInterface {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface Vector3PropInterface extends Vector2PropInterface {
  z?: number;
}

export default defineComponent({
  name: "ThreeCamera",
  props: {
    aspect: { type: Number, default: 1 },
    far: { type: Number, default: 2000 },
    fov: { type: Number, default: 50 },
    near: { type: Number, default: 0.1 },
    position: {
      type: Object as PropType<Vector3PropInterface>,
      default: () => ({ x: 0, y: 0, z: 0 }),
    },
    lookAt: { type: Object as PropType<Vector3PropInterface>, default: null },
  },
  setup(props) {
    const renderer = inject(RendererInjectionKey);
    if (!renderer) {
      console.error("Renderer not found");
      return;
    }
    const camera = new PerspectiveCamera(
      props.fov,
      props.aspect,
      props.near,
      props.far
    );
    renderer.camera = camera;

    return { renderer, camera };
  },
  __hmrId: "ThreeCamera",
});
