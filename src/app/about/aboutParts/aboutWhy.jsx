import Image from "next/image";
import Link from "next/link";

import "@/styles/about/why.css";
export default function AboutWhy() {
  return (
    <div className="aboutWyhBg">
      <div className="whyContent">
        <div className="titleWrapper">
          <div className="circle">{/* cssで作成 */}</div>
          <div className="titleStatement">
            <h2 className="why">Why?</h2>
            <h3 className="meaning">なぜデザイナーになりたいのか</h3>
          </div>
        </div>
        <div className="reason">
          <p>
            私は、デザインを通じて「想いを形にすること」に魅力を感じています。
            <br />
            1人で試行錯誤しながら制作を進めることも達成感があり楽しいですが、制作する仲間と共にアイデアを出し合い、1つの作品を作り上げる過程に、より大きなやりがいを感じます。意見が衝突し、一筋縄ではいかないこともありますが、その先にある「より良い作品」を目指すことが、私にとっての楽しさであり、成長につながると考えています。
            <br />
            そして、自分が携わったデザインによって誰かの心が動き、新たな価値を生み出せることに大きな喜びを感じます。
            <br />
            デザインには、ただ「見た目を整える」以上の力があると信じています。
            <br />
            <br />
            <span>
              こんな素敵な職業だから、私は【デザイナー】になりたいです。
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
