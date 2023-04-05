import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import iosInnerHeight from "ios-inner-height";
import { SPHEREFRAGSHADER, SPHEREVERTSHADER } from "./constants";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Displacement Sphere
    // by Cody Bennett
    // https://codyb.co

    // Setup

    const start = Date.now();

    //Shaders

    const sphereFragShader = SPHEREFRAGSHADER;
    const sphereVertShader = SPHEREVERTSHADER;

    // Init

    const rand = Math.random();
    const renderer = new THREE.WebGLRenderer({
      canvas,
      powerPreference: "high-performance",
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      200
    );
    const scene = new THREE.Scene();

    const uniforms = THREE.UniformsUtils.merge([
      THREE.UniformsLib["ambient"],
      THREE.UniformsLib["lights"],
      THREE.ShaderLib.phong.uniforms,
      { time: { type: "f", value: 0 } },
    ]);

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: sphereVertShader,
      fragmentShader: sphereFragShader,
      lights: true,
    });

    const geometry = new THREE.SphereBufferGeometry(32, 144, 144);
    const sphere = new THREE.Mesh(geometry, material);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 60;

    scene.add(sphere);
    sphere.position.z = 0;
    sphere.modifier = rand;

    // Light

    const light = new THREE.DirectionalLight(0xdf73ff, 0.6);
    light.position.z = 200;
    light.position.x = -100;
    light.position.y = -200;
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Handle Resize

    const handleResize = () => {
      const canvasHeight = iosInnerHeight();
      const windowWidth = window.innerWidth;
      const fullHeight = canvasHeight + canvasHeight * 0.3;
      canvas.style.height = fullHeight;
      renderer.setSize(windowWidth, fullHeight);
      camera.aspect = windowWidth / fullHeight;
      camera.updateProjectionMatrix();

      if (windowWidth <= 696) {
        sphere.position.x = 14;
        sphere.position.y = 10;
      } else if (windowWidth <= 1024) {
        sphere.position.x = 18;
        sphere.position.y = 14;
      } else {
        sphere.position.x = 22;
        sphere.position.y = 16;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Interaction

    let ticking = false;
    let animationFrame = null;

    const onMouseMove = (event) => {
      const animate = () => {
        const position = {
          x: event.clientX / window.innerWidth,
          y: event.clientY / window.innerHeight,
        };

        const tween = new TWEEN.Tween(sphere.rotation)
          .to({ x: position.y / 2, y: position.x / 2 }, 1000)
          .easing(TWEEN.Easing.Quartic.Out)
          .start();

        ticking = false;
      };

      if (!ticking) {
        animationFrame = requestAnimationFrame(animate);
        ticking = true;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animate

    const animate = () => {
      const animation = requestAnimationFrame(animate);
      uniforms.time.value = 0.000075 * (Date.now() - start);
      sphere.rotation.z += 0.002;
      renderer.render(scene, camera);
      TWEEN.update();
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
