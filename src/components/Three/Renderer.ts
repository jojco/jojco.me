import {
  ComponentPublicInstance,
  defineComponent,
  InjectionKey,
  PropType,
} from "vue";
import { WebGLRendererParameters, Scene, Camera } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

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
  },
  mounted() {
    //
  },
  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
  __hmrId: "ThreeRenderer",
});
