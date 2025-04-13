import Image from "next/image";
import Link from "next/link";
import "@/styles/about/aboutFv.css";

export default function AboutFv() {
  return (
    <div className="aboutFvBg">
      <video className="bgVideo" autoPlay loop muted>
        <source src="/videos/fvVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="aboutFvContent">
        <h1>About</h1>
        <div className="selfIntroductionWrapper">
          <div className="myPictureWrapper">
            <div className="myPicture">{/* 自分の写真入れる */}</div>
            <div className="mbti">{/* mbtiの画像入れる */}</div>
          </div>
          <div className="sentenceWrapper">
            <p className="RomaAlphabet">Yu Nakano</p>
            <p className="ChineseCharacters">中野優</p>
            <p>何かに没頭している時間や、人と関わることが大好きな20歳です♪</p>
            <p>
              趣味は、セルフネイルやカラオケです。
              <br />
              ネイルは高校生の頃からはじめ、今では友達に頼まれて、施術することもあります♪
              <br />
              カラオケは【楽しい！】を誰かと共有するのが好きなので、友達と一緒に行くことが多いです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
