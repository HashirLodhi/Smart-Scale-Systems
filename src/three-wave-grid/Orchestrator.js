import * as THREE from "three";
import Debug from "./Utils/Debug.js";
import Sizes from "./Utils/Sizes.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import Stage from "./Stage.js";

let instance = null;

export default class Orchestrator {
    constructor(_canvas, _container) {
        if (instance) {
            return instance;
        }
        instance = this;

        this.canvas = _canvas;
        this.container = _container;

        this.debug = new Debug();
        this.sizes = new Sizes(_container);
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.clock = new THREE.Timer();
        this.clock.connect(document);

        this.stage = new Stage();

        this.sizes.emitter.on("resize", () => {
            this.resize();
        });

        this.renderer.instance.setAnimationLoop(this.animate.bind(this));
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    animate() {
        this.clock.update();
        const delta = this.clock.getDelta();
        const elapsed = this.clock.getElapsed();
        this.update(elapsed, delta);
    }

    update(elapsed, delta) {
        this.camera.update();
        this.stage.update(delta);
        this.renderer.update();
    }

    destroy() {
        this.clock.disconnect();
        this.clock.dispose();
        this.sizes.emitter.off("resize");

        this.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
                for (const key in child.material) {
                    const value = child.material[key];
                    if (value && typeof value.dispose === "function") {
                        value.dispose();
                    }
                }
            }
        });

        this.camera.controls.dispose();
        this.renderer.instance.dispose();

        if (this.debug.active) this.debug.ui.destroy();

        instance = null;
    }
}
