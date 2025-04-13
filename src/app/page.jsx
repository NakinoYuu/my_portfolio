"use client"; // Next.jsのappディレクトリでは必要

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./Components/header";
import HomeFv from "./home/fv";
import HomeChoice from "./home/choice";
import HomeWorks from "./home/works";
import HomeAbout from "./home/about";
import HomeBye from "./home/bye";
import Footer from "./Components/footer";
import "@/styles/home/styles.css";

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(null); // ここでselectedCharacterとsetSelectedCharacterを定義
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#homeWorks") {
      const element = document.getElementById("homeWorks");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // 遷移後のレンダリングを待つために少し遅延
      }
    }
  }, []);

  return (
    <div className="homePage">
      <Header />
      <HomeFv />
      <HomeChoice setSelectedCharacter={setSelectedCharacter} />
      {/* setSelectedCharacterを渡す */}
      <div id="homeWorks">
        <HomeWorks selectedCharacter={selectedCharacter} />
        {/* selectedCharacterを渡す */}
      </div>
      <HomeAbout />
      <HomeBye />
      <Footer />
    </div>
  );
}
