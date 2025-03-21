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
              普段できない体験や楽しい思い出が増えるので、海外・国内問わず大好きです。2024年には念願の韓国旅行で、現地の方と会話できたことが印象に残っています！
            </p>
          </div>
        </div>

        <div className="eating">
          <div className="eatingImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- 食べること -</p>
            <p className="detailsText">
              何か美味しいものを食べると、幸せな気持ちになって、自然と笑顔になれるます。海鮮料理や辛い食べ物が特に好きで、毎日でも食べれるくらい好きです！{" "}
            </p>
          </div>
        </div>

        <div className="cafe">
          <div className="cafeImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- カフェ巡り -</p>
            <p className="detailsText">
              普段行かない場所でも、カフェがあるなら行ってみよう！という気持ちになることが、多々あります。自分が知らない場所へ行き、新たな経験をできること楽しいです♪
            </p>
          </div>
        </div>

        <div className="selfNail">
          <div className="selfNailImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- セルフネイル -</p>
            <p className="detailsText">
              作業に没頭している時間や、完成した時の達成感が好きです… ♡
              やってみたいデザインを見つけても、頻繁に、かつ低予算で変えることができるので、セルフはやめられません…笑{" "}
            </p>
          </div>
        </div>

        <div className="family">
          <div className="familyImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- 家族-</p>
            <p className="detailsText">
              家族にはなんでも話せるくらいに仲が良く、空気のように必要不可欠な存在です。妹2人とは3人でお買い物デートへ行ったりします♪この写真は、姉妹で旅行した時の写真です
              ♡
            </p>
          </div>
        </div>

        <div className="karaoke">
          <div className="karaokeImg">{/* 画像入れる */}</div>
          <div className="textDetailsWrapper">
            <p className="likesTitle">- カラオケ -</p>
            <p className="detailsText">
              賑やかに楽しんだり、大声を出してストレス発散できちゃうカラオケが大好きです！普段スコアは流し見程度ですが、ゾロ目は初めて見たので気分が高鳴り、つい撮ってしまいました。笑
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
