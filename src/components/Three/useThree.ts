import { Camera, Scene, WebGLRenderer } from "three";

export interface ThreeInterface {
  renderer: WebGLRenderer;
  camera?: Camera;
  scene?: Scene;
  init(): boolean;
  //   dispose(): void;
  //   render(): void;
  //   renderC(): void;
  //   setSize(width: number, height: number): void;
}

export default function useThree() {
  function createRenderer(): WebGLRenderer {
    const renderer = new WebGLRenderer({});
    renderer.autoClear = true;
    return renderer;
  }

  const renderer = createRenderer();

  const obj: ThreeInterface = {
    renderer,
    init,
  };

  return obj;

  function init() {
    if (!obj.scene) {
      console.error("Missing Scene");
      return false;
    }

    if (!obj.camera) {
      console.error("Missing Camera");
      return false;
    }

    // if (config.resize) {
    //   onResize();
    //   window.addEventListener("resize", onResize);
    // } else if (config.width && config.height) {
    //   setSize(config.width, config.height);
    // }

    // initPointer();

    // if (config.orbitCtrl) {
    //   const cameraCtrl = new OrbitControls(obj.camera, obj.renderer.domElement);
    //   if (config.orbitCtrl instanceof Object) {
    //     Object.entries(config.orbitCtrl).forEach(([key, value]) => {
    //       // @ts-ignore
    //       cameraCtrl[key] = value;
    //     });
    //   }
    //   onBeforeRender(() => {
    //     cameraCtrl.update();
    //   });
    //   obj.cameraCtrl = cameraCtrl;
    // }

    return true;
  }
}
