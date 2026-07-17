import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SpiralBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f5f8);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.8));

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(15, 20, 15);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xe8ecef, 0.8);
    fillLight.position.set(-15, -10, -10);
    scene.add(fillLight);

    const geometry = new THREE.TorusKnotGeometry(7, 2.2, 300, 32, 1, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0xfafafc,
      roughness: 0.65,
      metalness: 0.1,
      flatShading: false,
    });
    const spiral = new THREE.Mesh(geometry, material);
    scene.add(spiral);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      spiral.rotation.x += 0.003;
      spiral.rotation.y += 0.005;
      spiral.rotation.z -= 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}