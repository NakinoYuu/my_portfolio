import Image from "next/image";
import Link from "next/link";

import "@/styles/about/likes.css";
export default function AboutLikes() {
  return (
    <div className="aboutLikesBg">
      <div className="likesContent">
        <div className="titleWrapper3">
          <div className="circle">{/* cssで作成 */}</div>
          <div className="titleStatement">
            <h2 className="likes">Likes</h2>
            <h3 className="meaning">好きなもの</h3>
          </div>
        </div>
      </div>
      <div className="likesDetails">
        <div className="trip">
          <div className="tripImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- 旅行 -</p>
            <p className="detailsText">
              普段できないこともでき、楽しい思い出
              も増えるので、海外旅行・国内旅行、共
              に好きです。2024年はずっと行きたかっ
              た韓国に行き、翻訳を使わずに韓国語で
              会話ができてうれしたったです。
            </p>
          </div>
        </div>

        <div className="eating">
          <div className="eatingImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- 食べること -</p>
            <p className="detailsText">
              何か美味しいものを食べると、幸せな気持ちになって、自然と笑顔になれるます。海鮮料理や辛い食べ物が特に好きで、毎日でも食べれちゃいます！笑{" "}
            </p>
          </div>
        </div>

        <div className="cafe">
          <div className="cafeImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- カフェ巡り -</p>
            <p className="detailsText">
              普段行かない場所でも、カフェがあるなら行ってみよう！という気持ちになることが、多々ありくらいに好きです。1人で行くよりは、友達と行くことが多く、この写真も友達が上手に撮ってくれました！{" "}
            </p>
          </div>
        </div>

        <div className="selfNail">
          <div className="selfNailImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- セルフネイル -</p>
            <p className="detailsText">
              作業に没頭している時間や、完成した時の達成感が好きです。新しいデザインにしたくても、すぐに新しく変れちゃうので、セルフはやめられません…笑{" "}
            </p>
          </div>
        </div>

        <div className="family">
          <div className="familyImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- 家族-</p>
            <p className="detailsText">
              家族にはなんでも話せるくらいに仲が良く、空気みたいに必要不可欠な存在です。次女とは学校終わりに会ってカフェに行ったりもします。この写真は、姉妹で旅行した時の写真です。{" "}
            </p>
          </div>
        </div>

        <div className="karaoke">
          <div className="karaokeImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- カラオケ -</p>
            <p className="detailsText">
              賑やかに楽しむこともできて、それに伴い自然とストレスの発散もできちゃうカラオケが好きです。わいわいするために行くので、1人よりも友達や次女と一緒に行くことが多いです。{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
