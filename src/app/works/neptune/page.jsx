"use client";
import { useEffect } from "react";
import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/neptune.css";

export default function Neptune() {
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
    <div className="neptunePage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail neptuneThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>"中野優"の名刺</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          学校で開催される作品展示会に来校された企業の方へお渡しするために名刺を作成しました。
          1年生のときに作成した名刺よりも可愛らしさを抑え、落ち着いたデザインに仕上げています
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">自主制作</p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">企業様</p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              自分を相手に分かりやすく伝え、印象に残すため
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              この名刺は、学校で開催される作品展示会に来校された企業の方々にお渡しすることを目的に制作しました。名前を大きく配置することで、受け取った方に印象を残せるよう工夫しています。
              掲載する情報は、名前（ローマ字付き）、学校名、卒業予定年次に加え、自分がデザインでどう社会に関わっていきたいかという想いを簡潔に盛り込みました。また、興味を持ってくださった方がスムーズに連絡を取れるよう、必要な情報に絞って整理しています。
              情報の優先順位や視線の流れにも配慮し、限られたスペースの中でも意図が伝わる構成を心がけました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              この名刺は「見やすさ」「伝わりやすさ」「自分らしさ」を軸に、受け取る相手にとってストレスのないデザインを意識して制作しました。視線の流れに沿ったレイアウトをはじめ、視認性の高いフォントや色のコントラスト、余白のバランスに配慮し、情報が自然に伝わるよう設計しています。
              配色は同系色でまとめて統一感を持たせ、清潔感のある色合いや柔らかな曲線を取り入れることで、初対面の方にも安心感と親しみを感じてもらえるよう工夫しました。
              また、背景のグラデーションや白いラインには、自分自身の柔軟性やアイデアの広がりを込めています。裏面のイニシャルロゴには、あえて表とは異なるスタイリッシュなフォントを用い、真面目で冷静、現実的な自分の一面も大切にしたデザインです。
              全体を通して、「相手に寄り添う丁寧さ」と「自分らしさ」のバランスを大切にしています。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">5時間(情報設計1時間、デザイン4時間)</p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">Illustrator(,Photoshop)</p>
          </div>
        </div>
      </div>
      {/* 名刺 */}
      <div className="fade-slide-up">
        <p className="businessCardTitle">名刺デザイン</p>
        <div className="businessCardImgWrapper">
          <div className="businessCardImg neptuneBusinessCardImgFront">
            <p>表</p>
          </div>
          <div className="businessCardImg neptuneBusinessCardImgBack">
            <p>裏</p>
          </div>
        </div>
      </div>
      {/* モックアップ*/}
      <div className="fade-slide-up">
        <p className="MockUpTitle">使用イメージ</p>
        <div className="MockUpImgWrapper">
          <div className="MockUpImg neptuneMockUpImg"></div>
        </div>
      </div>

      <BackToAllWorks />
      <Footer />
    </div>
  );
}
