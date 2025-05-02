"use client";
import { useEffect } from "react";

import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/jupiter.css";

export default function Jupiter() {
  useEffect(() => {
    const targets = document.querySelectorAll(".fade-slide-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="jupiterPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail jupiterThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>チョコレートフラッペの販促バナー</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          カフェの新商品「濃厚チョコレートフラッペ」の販促を目的に、架空のバナーデザインを制作しました。
          同じ商品でありながら、一方は気軽に楽しめるカジュアルなタイプ、もう一方は日頃のご褒美として味わうプレミアムなタイプという、2つのコンセプトで展開しています。
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">自主制作</p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">
              【カジュアルver.】10〜20代の学生や若い社会人
              <br />
              【プレミアムver.】20〜30代の働く女性や主婦層、自分へのご褒美を大切にする人
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              新商品の魅力を効果的に伝え、来店のきっかけをつくるため
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              新商品であることを最優先で伝えるため、まずは視線の流れに沿って情報の出し方を設計しました。
              まず、興味を持っていただくために、商品ビジュアルを中心に据え、商品イメージの印象づけと訴求力を高めました。
              次に、文字情報では、「グーテンベルク・ダイヤグラム」の法則を参考にし、目に入りやすい左上に「新商品」であることを示す要素を配置しました。
              一番最後に目に止まると言われている右下には、次の行動につながるよう発売日を配置しました。
              ユーザーの理解と行動を意識し、目的を達成できるよう情報設計を行いました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              あえて掲載情報はすべて共通としつつ、ターゲットごとの価値観や購買動機に合わせて、視覚的な表現のみで印象を差別化する工夫を行いました。具体的には、背景・フォント・色・表記の仕方の4点を調整し、デザインだけでターゲットに応じた訴求ができることを目指しています。
              <br />
              なお、使用した商品画像やパーツ画像は、すべて一から加工・配置等を行い制作しました。
              <br />
              【1枚目（左・上）】「お手軽さ」や「親しみやすさ」が購買のきっかけになりやすい若年層に向けて、軽やかな色使いや視認性の高いフォントを採用しました。
              <br />
              【2枚目（右・下）】「品質」や「特別感」を重視する層に向けて、深みのあるトーンや装飾性のある書体を用い、商品価値を高めるようなプレミアム感を表現しています。また、メインの商品ビジュアルは1枚目より小さく配置することで、余白を活かした上品な印象を与えるよう工夫しました。
              このように、視覚心理と消費行動の傾向を踏まえ、印象と行動の関係を意識したデザイン設計を行いました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">
              4日(企画2時間、デザイン4日(素材制作3日、タイポグラフィ1日))
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">Photoshop , Illustrator</p>
          </div>
        </div>
      </div>
      {/* バナー系。星の名前あるとこクラス名それぞれ変更*/}
      <div className="bannerImgWrapper fade-slide-up">
        <div className="BannerImg jupiterBannerImgLeft"></div>
        <div className="BannerImg jupiterBannerImgRight"></div>
      </div>
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
