import Image from "next/image";
import Link from "next/link";

import "@/styles/about/aboutFv.css";
export default function AboutFv() {
  return (
    <div className="aboutFvBg">
      <div className="aboutFvContent">
        <h1>About</h1>
        <div className="selfIntroductionWrapper">
          <div className="myPictureWrapper">
            <div className="myPicture">{/* 自分の写真入れる */}</div>
            <div className="mbti">{/* mbtiの画像入れる */}</div>
          </div>
          <div className="sentenceWrapper">
            <p className="RomaAlphabet">Yu　Nakano</p>
            <p className="ChineseCharacters">中野優</p>
            <p>何かに没頭している時間と人と関わることが大好きな20歳です♪</p>
            <p>
              趣味は、セルフネイルやカラオケです。
              ネイルは高校生の頃からはじめ、今では友達に施術することもあります。
              カラオケは、1人で行くよりも友達と行く方が楽しいので好きです！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
