import { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/home/works.css";

export default function HomeWorks({ selectedCharacter }) {
  const [visitedPlanets, setVisitedPlanets] = useState([]);

  useEffect(() => {
    document.querySelectorAll(".planet").forEach((planet) => {
      if (planet.classList.contains("me")) {
        // "me" だけは Y 軸のアニメーションを固定
        planet.style.animation = `floatY 2.5s ease-in-out infinite alternate`;
      } else {
        const randomDuration = Math.random() * 2 + 2;
        const direction = Math.random() > 0.5 ? "Y" : "X";
        planet.style.animation = `float${direction} ${randomDuration}s ease-in-out infinite alternate`;
      }
    });
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("visitedPlanetsData"));
    const now = Date.now();
    const expirationTime = 60 * 60 * 1000;
    // これで60分間有効。変更したい場合は1番前の数字を変更する。1=1分で入力

    if (storedData && storedData.timestamp + expirationTime > now) {
      setVisitedPlanets(storedData.planets);
    } else {
      localStorage.removeItem("visitedPlanetsData");
      setVisitedPlanets([]);
    }
  }, []);

  const handlePlanetClick = (planet) => {
    if (!visitedPlanets.includes(planet)) {
      const updatedPlanets = [...visitedPlanets, planet];
      setVisitedPlanets(updatedPlanets);

      const newData = {
        planets: updatedPlanets,
        timestamp: Date.now(),
      };
      localStorage.setItem("visitedPlanetsData", JSON.stringify(newData));
    }
  };

  const getCharacterImage = () => {
    switch (selectedCharacter) {
      case "crewA":
      case "crewB":
      case "crewC":
        return "/partImg/yu.png";
      default:
        return "/partImg/me.png";
    }
  };
  // 選んだキャラクターが保持されるようにする。設定できたらデフォは消すかな。
  return (
    <div className="worksBg">
      <h2 className="title">Works</h2>
      <div className="planetWrapper">
        <div className="planet">
          <Link
            href="/works/mercury/"
            onClick={() => handlePlanetClick("mercury")}
          >
            <div
              className={`planetImage mercury ${
                visitedPlanets.includes("mercury") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/venus/" onClick={() => handlePlanetClick("venus")}>
            <div
              className={`planetImage venus ${
                visitedPlanets.includes("venus") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet">
          <Link href="/works/earth/" onClick={() => handlePlanetClick("earth")}>
            <div
              className={`planetImage earth ${
                visitedPlanets.includes("earth") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet">
          <Link
            href="/works/neptune/"
            onClick={() => handlePlanetClick("neptune")}
          >
            <div
              className={`planetImage neptune ${
                visitedPlanets.includes("neptune") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet me">
          <div
            className="me"
            style={{ backgroundImage: `url(${getCharacterImage()})` }}
          ></div>
        </div>
        <div className="planet">
          <Link href="/works/mars/" onClick={() => handlePlanetClick("mars")}>
            <div
              className={`planetImage mars ${
                visitedPlanets.includes("mars") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet">
          <Link
            href="/works/heavenlyStar/"
            onClick={() => handlePlanetClick("heavenlyStar")}
          >
            <div
              className={`planetImage heavenlyStar ${
                visitedPlanets.includes("heavenlyStar") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet">
          <Link
            href="/works/saturn/"
            onClick={() => handlePlanetClick("saturn")}
          >
            <div
              className={`planetImage saturn ${
                visitedPlanets.includes("saturn") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
        <div className="planet">
          <Link
            href="/works/jupiter/"
            onClick={() => handlePlanetClick("jupiter")}
          >
            <div
              className={`planetImage jupiter ${
                visitedPlanets.includes("jupiter") ? "visited" : ""
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
