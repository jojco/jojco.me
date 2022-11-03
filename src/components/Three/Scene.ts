import { defineComponent, inject, InjectionKey, provide } from "vue";
import { Scene } from "three";
import { RendererInjectionKey } from "./Renderer";

export const SceneInjectionKey: InjectionKey<Scene> = Symbol("ThreeScene");

export default defineComponent({
  name: "ThreeScene",
  props: {
    hello: Boolean,
  },
  setup() {
    console.log("hello from ThreeScene");
    const renderer = inject(RendererInjectionKey);
    const scene = new Scene();

    if (!renderer) {
      console.error("Renderer not found");
      return;
    }

    renderer.scene = scene;
    provide(SceneInjectionKey, scene);

    // const add = (o: Object3D): void => { scene.add(o) }
    // const remove = (o: Object3D): void => { scene.remove(o) }

    return { scene };
  },
  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
  __hmrId: "ThreeScene",
});
