"use client";
import { useEffect } from "react";
import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/heavenlyStar.css";

export default function HeavenlyStar() {
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
    <div className="heavenlyStarPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail heavenlyThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>Gelato Mareのlogo</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          架空の海辺にあるジェラート屋さんである『Gelato
          Mare』のロゴを制作しました。
          観光客や家族連れが気軽に立ち寄れるような親しみやすさを意識しつつ、ジェラートのお店であることがひと目で伝わるようにデザインをしました。
          また、ショップカードや店舗看板、パッケージなど、さまざまなツールに展開できるよう、汎用性のあるロゴを目指しました。
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">種類</p>
            <p className="details">自主制作</p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">観光客や家族連れ</p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              ロゴを作ることによってお店として一目で認識していただきやすいようにするため。また、さまざまなツールに展開し、ロゴを使用することにより一貫したブランドイメージを確立し認知度を向上させるため。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              一目でジェラート屋さんだと認識していただけるよう、ジェラート風のシルエットを大きく配置しました。
              背景にはやわらかな曲線の波模様を取り入れ、近くにある海を表現。さらに、ジェラートを包み込むように配置した太陽のモチーフによって、ターゲットである家族の温かさを表現しています。
              ジェラートのとろけたシルエットは海の雫とも重なるダブルミーニングとなっており、印象に残るロゴを目指しました。
              ショップカードや看板、パッケージ、SNSアイコンなど多様なツールへの展開を想定し、視認性と汎用性の高いデザインに仕上げています。
              また、文字ロゴがなくても意味が伝わるよう意識して設計し、カラーだけでなく白黒2トーンでも違和感なく使用できるよう配慮しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">3日(企画1日、デザイン2日)</p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">Illustrator(,Photoshop)</p>
          </div>
        </div>
      </div>
      {/* そのままのロゴの画像 */}
      <div className="fade-slide-up">
        <p className="logoTitle">ロゴデザイン</p>
        <div className="logoImgWrapper">
          <div className="logoImg heavenlyLogoImg"></div>
        </div>
      </div>
      {/* モックアップ*/}
      <div className="fade-slide-up">
        <p className="MockUpTitle">使用イメージ</p>
        <div className="MockUpImgWrapper">
          <div className="MockUpImg heavenlyMockUpImgLeft"></div>
          <div className="MockUpImg heavenlyMockUpImgRight"></div>
        </div>
      </div>
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
