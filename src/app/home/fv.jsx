"use client";

import { useState, useEffect } from "react";
import "@/styles/home/fv.css";

export default function HomeFv() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fvBg">
      {/* 動画背景 */}
      <video autoPlay loop muted playsInline className="bgVideo">
        <source src="/videos/fvVideo2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* テキスト */}
      <h1 className={`greeting ${isVisible ? "visible" : ""}`}>
        Welcome to Nakano's portfolio
      </h1>
    </div>
  );
}
