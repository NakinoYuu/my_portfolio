import Image from "next/image";
import "@/styles/home/choice.css";

export default function HomeChoice() {
  return (
    <div className="choice">
      <p className="question">どの隊員と宇宙を冒険しますか？？</p>
      <div className="characterSelect">
        {/* 線の背景characterSelectに画像入れる */}
        <div className="character">
          <div className="crewWrapper">
            <div className="crewA"></div>
            <p>隊員A</p>
          </div>
          <div className="crewWrapper">
            <div className="crewB"></div>
            <p>隊員B</p>
          </div>
          <div className="crewWrapper">
            <div className="crewC"></div>
            <p>隊員C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
