"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useSpring } from "framer-motion";
import Description from "@/components/Description";
import Gallery from "@/components/Gallery";
import { projects } from "@/lib/data";

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove}>
      {projects.map(({ handle }, i) => {
        return (
          <Gallery mousePosition={mousePosition} handle={handle} key={i} />
        );
      })}
      <Description mousePosition={mousePosition} projects={projects} />
    </main>
  );
}
