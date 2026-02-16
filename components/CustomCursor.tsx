'use client'

import { gsap, useGSAP } from "@/lib/gsap-utils";
import { useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!cursorRef.current) return;

    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

 

    window.addEventListener('mousemove', (e)=>{
        xTo(e.clientX);
        yTo(e.clientY);
    });

    return ()=>{
    window.removeEventListener("mousemove", (e)=>{
        xTo(e.clientX);
        yTo(e.clientY);
    });
    }

  });

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 size-12 bg-white  rounded-full pointer-events-none mix-blend-difference z-80"
    />
  );
}
