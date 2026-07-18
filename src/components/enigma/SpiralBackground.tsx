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
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(10, 14, 18);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xe8ecef, 0.7);
    rim.position.set(-12, -6, 8);
    scene.add(rim);

    // Build funnel: a spiral tube that coils inward and descends into a hole
    const funnel = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: 0xfafaf5,
      roughness: 0.55,
      metalness: 0.05,
    });

    const points: THREE.Vector3[] = [];
    const turns = 7;
    const segmentsPerTurn = 140;
    const total = turns * segmentsPerTurn;
    for (let i = 0; i <= total; i++) {
      const t = i / total; // 0..1
      // Radius eases from outer -> 0 (funnel opening to hole)
      const radius = 11 * Math.pow(1 - t, 1.35) + 0.15;
      const angle = t * turns * Math.PI * 2;
      // Depth deepens toward center
      const z = -Math.pow(t, 1.6) * 9;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          z,
        ),
      );
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeom = new THREE.TubeGeometry(curve, 1200, 0.38, 20, false);
    const spiral = new THREE.Mesh(tubeGeom, material);
    funnel.add(spiral);

    // Central dark hole disc
    const holeGeom = new THREE.CircleGeometry(0.9, 48);
    const holeMat = new THREE.MeshBasicMaterial({ color: 0xd8d8d4 });
    const hole = new THREE.Mesh(holeGeom, holeMat);
    hole.position.z = -9.2;
    funnel.add(hole);

    // Tilt slightly to feel 3D but mostly face-on
    funnel.rotation.x = -0.05;
    scene.add(funnel);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      funnel.rotation.z += 0.0025;
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
      tubeGeom.dispose();
      holeGeom.dispose();
      holeMat.dispose();
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