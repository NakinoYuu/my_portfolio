import { useEffect } from "react";
import "@/styles/home/choice.css";

export default function HomeChoice({ setSelectedCharacter }) {
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);

    // スライドしてHomeWorksセクションにスクロール
    const element = document.getElementById("homeWorks");
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // スクロールを遅延させて、選択後に滑らかに移動
    }
  };

  return (
    <div className="choice">
      <p className="question">どの隊員と宇宙を冒険しますか？？</p>
      <div className="characterSelect">
        <div className="character">
          <div
            className="crewWrapper"
            onClick={() => handleCharacterSelect("crewA")}
          >
            <div className="crewA"></div>
            <p>隊員A</p>
          </div>
          <div
            className="crewWrapper"
            onClick={() => handleCharacterSelect("crewB")}
          >
            <div className="crewB"></div>
            <p>隊員B</p>
          </div>
          <div
            className="crewWrapper"
            onClick={() => handleCharacterSelect("crewC")}
          >
            <div className="crewC"></div>
            <p>隊員C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
