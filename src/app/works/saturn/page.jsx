"use client";
import { useEffect } from "react";

import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/saturn.css";

export default function Saturn() {
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
    <div className="saturnPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail saturnThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>マスカラの架空広告バナー</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          コスメブランド「XIU」の新作マスカラであるボリュームマスカラの広告バナー。
          架空の商品を想定し、販促を目的としたバナーデザインを制作しました。
          「XIU
          Vol.MASCARA」は“目力を際立たせるブラックカラー”を特徴に、視線を引きつけるような力強いカラーリングとタイポグラフィで構成。
          商品特性を視覚的にわかりやすく伝えることを意識し、ターゲット層に響く訴求力のあるデザインを目指しました。
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">自主制作</p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">
              10代後半〜20代前半の目元のインパクトに重きを置いてる人
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              XIUの新作ボリュームマスカラの登場を伝え、購買意欲を持ってもらうため
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              ユーザーの視線の流れを意識し、視覚的階層に基づいて情報の優先順位と配置を設計しました。
              まず、最も視覚的インパクトを持つ「マスカラを使用したモデル」を大きく配置し、商品使用後の印象や効果が直感的に伝わるようにしています。
              次に、視線の中間地点に「NEW」の要素を配置することで、新商品の訴求力を高めました。
              その後、視線は自然と商品本体のビジュアルへと移動し、最後に「商品名・カラーバリエーション・価格」といった購入に必要な具体的情報が目に入るよう構成しています。
              このように、視覚的な注目度に応じて情報の重みづけを行い、ユーザーが無理なく内容を理解できる設計を心がけました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              要素ごとに視覚的なメリハリを持たせることで、情報の優先順位を直感的に伝える工夫を行いました。
              まず、モデルの写真は商品の効果を象徴する要素として大きく配置し、目元の存在感を際立たせ、ボリュームマスカラの「目力アップ」という特性を視覚的に訴求しています。
              また、視線の中間地点に「NEW」要素を目立つように配置し、新商品であることを伝えています。
              商品ビジュアルには、光沢や立体感のある表現を取り入れ、実物の質感や商品イメージを強調しています。
              そして最後に、商品名・カラーバリエーション・価格といった必要情報を整理して配置することで、視線の流れに沿ってスムーズに商品理解へとつなげています。
              全体を通して、「強さ」「印象深さ」「商品理解」の3つをバランスよく実現させたデザインとなっています。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">8時間(企画1時間、デザイン7時間)</p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">Photoshop , Illustrator</p>
          </div>
        </div>
      </div>
      {/* バナー系。星の名前あるとこクラス名それぞれ変更*/}
      <div className="bannerImgWrapper fade-slide-up">
        <div className="BannerImg saturnBannerImg"></div>
      </div>
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
