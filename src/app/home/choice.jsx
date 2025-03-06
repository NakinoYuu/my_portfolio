import Image from "next/image";
import "@/styles/home/choice.css";

export default function HomeChoice() {
  return (
    <div className="choice">
      <p className="question">どの隊員と宇宙を冒険しますか？？</p>
      <div className="characterSelect">
        {/* 線の背景characterSelectに画像入れる */}
        <div className="character">
          <div className="crewA"></div>
          <div className="crewB"></div>
          <div className="crewC"></div>
        </div>
      </div>
    </div>
  );
}
