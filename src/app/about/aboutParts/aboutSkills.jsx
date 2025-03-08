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
              webサイトやバナーなどのデザインだけでなく、チラシなどの紙媒体のデザイン経験もあります。目的を明確化するために資料収集や市場調査をしっかり行ってからデザイン作業に取り掛かります。デザイン面では【引き算】を大切にしています。
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
              webサイトやバナーなどのデザインだけでなく、チラシなどの紙媒体のデザイン経験もあります。目的を明確化するために資料収集や市場調査をしっかり行ってからデザイン作業に取り掛かります。デザイン面では【引き算】を大切にしています。
            </p>
          </div>
          <div className="toolName">
            <p>使用ツール：Figma/Illustrator/PhotoShop</p>
          </div>
        </div>
        <div className="skillsWrapper">
          <div className="skillsImg">{/* 描いた画像入れる */}</div>
          <div className="skillsTitleName">
            <p>コーディング</p>
          </div>
          <div className="skillsDetails">
            <p>
              webサイトやバナーなどのデザインだけでなく、チラシなどの紙媒体のデザイン経験もあります。目的を明確化するために資料収集や市場調査をしっかり行ってからデザイン作業に取り掛かります。デザイン面では【引き算】を大切にしています。
            </p>
          </div>
          <div className="toolName">
            <p>使用ツール：Figma/Illustrator/PhotoShop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
