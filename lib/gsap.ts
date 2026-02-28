"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: "power2.out",
    force3D: true,
  });
}

export { gsap, ScrollTrigger };
