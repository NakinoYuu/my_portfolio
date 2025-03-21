"use client";
import { useEffect } from "react";
import Link from "next/link";
import "@/styles/home/works.css";

export default function HomeWorks() {
  useEffect(() => {
    document.querySelectorAll(".planet").forEach((planet) => {
      const randomDuration = Math.random() * 2 + 2;
      const direction = Math.random() > 0.5 ? "Y" : "X";

      planet.style.animation = `float${direction} ${randomDuration}s ease-in-out infinite alternate`;
    });
  }, []);
  return (
    <div className="worksBg">
      <h2 className="title">Works</h2>
      <div className="planetWrapper">
        <div className="planet">
          <Link href="/works/mercury/">
            <div className="planetImage mercury"></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/venus/">
            <div className="planetImage venus"></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/earth/">
            <div className="planetImage earth"></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/neptune/">
            <div className="planetImage neptune"></div>
          </Link>
        </div>
        <div className="planet me">
          <div className="me"></div>
        </div>
        <div className="planet">
          <Link href="/works/mars/">
            <div className="planetImage mars"></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/heavenlyStar/">
            <div className="planetImage heavenlyStar"></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/saturn/">
            <div className="planetImage saturn"></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/jupiter/">
            <div className="planetImage jupiter"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
