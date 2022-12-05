import {
  ComponentPublicInstance,
  defineComponent,
  InjectionKey,
  PropType,
} from "vue";
import { WebGLRendererParameters, Scene, Camera } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import useThree from "~/components/Three/useThree";

export interface RendererInterface {
  scene?: Scene;
  camera?: Camera;
  composer?: EffectComposer;
}

export interface RendererPublicInterface
  extends ComponentPublicInstance,
    RendererInterface {}

export const RendererInjectionKey: InjectionKey<RendererPublicInterface> =
  Symbol("ThreeRenderer");

export default defineComponent({
  name: "ThreeRenderer",
  provide() {
    return {
      [RendererInjectionKey as symbol]: this,
    };
  },
  props: {
    params: {
      type: Object as PropType<WebGLRendererParameters>,
      default: () => ({}),
    },
    antialiasing: Boolean,
    aplha: Boolean,
  },
  setup() {
    console.log("hello from Renderer");
    const canvas = document.createElement("canvas");
    const three = useThree();
    const renderer = three.renderer;

    return {
      canvas,
      three,
      renderer,
    };
  },

  mounted() {
    this.three.init();
    // if (this.three.init()) {
    // }
  },
  beforeUnmount() {
    this.canvas.remove();
  },
  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
  __hmrId: "ThreeRenderer",
});
