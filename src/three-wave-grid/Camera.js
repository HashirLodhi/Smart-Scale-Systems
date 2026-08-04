import * as THREE from "three";
import Orchestrator from "./Orchestrator.js";
import GUI from "lil-gui";

export default class Camera {
    constructor() {
        this.orchestrator = new Orchestrator();
        this.sizes = this.orchestrator.sizes;
        this.scene = this.orchestrator.scene;
        this.canvas = this.orchestrator.canvas;

        this.radius = 12;
        this.alphaRange = Math.PI * 0.03;
        this.betaRange = Math.PI * 0.05;

        this.mouse = new THREE.Vector2(0, 0);
        this.lerpedMouse = new THREE.Vector2(0, 0);

        this.setInstance();
        this.setMouseListener();
        this.setGUI();
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            40,
            this.sizes.width / this.sizes.height,
            0.1,
            200,
        );
        this._updatePosition(0, 0);
        this.scene.add(this.instance);
    }

    setMouseListener() {
        this.onMouseMove = (e) => {
            this.mouse.x = (e.clientX / this.sizes.width) * 2 - 1;
            this.mouse.y = -(e.clientY / this.sizes.height) * 2 + 1;
        };
        window.addEventListener("mousemove", this.onMouseMove);
    }

    destroy() {
        if (this.onMouseMove) {
            window.removeEventListener("mousemove", this.onMouseMove);
        }
    }

    _updatePosition(mx, my) {
        const alpha = my * this.alphaRange;
        const beta = mx * this.betaRange;

        this.instance.position.set(
            -this.radius * Math.cos(alpha) * Math.sin(beta),
            this.radius * Math.cos(alpha) * Math.cos(beta),
            this.radius * Math.sin(alpha),
        );
        this.instance.up.set(0, 0, -1);
        this.instance.lookAt(0, 0, 0);
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        this.lerpedMouse.x += (this.mouse.x - this.lerpedMouse.x) * 0.04;
        this.lerpedMouse.y += (this.mouse.y - this.lerpedMouse.y) * 0.04;
        this._updatePosition(this.lerpedMouse.x, this.lerpedMouse.y);
    }

    setGUI() {
        this.gui = this.orchestrator.debug.ui;
        if (!this.gui) return;
        const camFolder = this.gui.addFolder("Camera");
        camFolder.add(this, "radius", 10, 20, 0.01).name("Distance");
    }
}
