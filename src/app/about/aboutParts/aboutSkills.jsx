import Image from "next/image";
import Link from "next/link";

import "@/styles/about/skills.css";
export default function AboutSkills() {
  return (
    <div className="aboutSkillsBg">
      <div className="skillsContent">
        <div className="titleWrapper2">
          <div className="circle">{/* cssで作成 */}</div>
          <div className="titleStatement">
            <h2 className="skills">Skills</h2>
            <h3 className="meaning">できること</h3>
          </div>
        </div>
      </div>
      <div className="skillsWrapper3">
        <div className="skillsWrapper">
          <div className="skillsImg">{/* 描いた画像入れる */}</div>
          <div className="skillsTitleName">
            <p>デザイン</p>
          </div>
          <div className="skillsDetails">
            <p>
              webサイトやアプリのデザインだけでなく、チラシなどの紙媒体のデザイン経験もあります。常にユーザーのことを考えながらデザイン制作に取り組み、デザインや使い勝手のフィードバックを友人や先生からいただき、UI/UXの向上を心がけています。
            </p>
          </div>
          <div className="toolName">
            <p>使用ツール：Figma/Illustrator/PhotoShop</p>
          </div>
        </div>
        <div className="skillsWrapper">
          <div className="skillsImg">{/* 描いた画像入れる */}</div>
          <div className="skillsTitleName">
            <p>イラスト</p>
          </div>
          <div className="skillsDetails">
            <p>
              小学生の頃から、イラストを描くことが大好きです♪
              昔はアナログで描くことが多かったのですが、iPadを購入してからはデジタルにも挑戦しています！今回制作したportfolioのイラストは全て、Procreateを用いて描いたものを使用しています。
            </p>
          </div>
          <div className="toolName">
            <p>使用ツール：Procreate /Illustrator</p>
          </div>
        </div>
        <div className="skillsWrapper">
          <div className="skillsImg">{/* 描いた画像入れる */}</div>
          <div className="skillsTitleName">
            <p>コーディング</p>
          </div>
          <div className="skillsDetails">
            <p>
              コーディングをする際は、一貫性のある名前の付け方をしたり、コメントを残すなど、後から見返しても理解できる書き方を意識しながら作業しています。また、cssやJavaScriptを用いてデザインやイメージをより細かく、忠実に再現することにも尽力しています。
            </p>
          </div>
          <div className="toolName">
            <p>使用言語：HTML / CSS / JavaScript </p>
          </div>
        </div>
      </div>
    </div>
  );
}
