"use client";
import { useEffect } from "react";

import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/venus.css";

export default function Venus() {
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
    <div className="venusPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail venusThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>歴てく</h2>
        </div>
      </div>
      {/* 作品のサムネ写真と作品名入れる */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          クライアントさまから「歴史の堅苦しいイメージを払拭しながら、『歴てく』の魅力を知ってもらい、最終的にツアーの予約につなげたい」というご要望を受け、サイトを制作しました。
          クライアントさまのご要望を元に私たちのチームで決めたコンセプトは、【1.歴てくに安心感や信頼を感じてもらえるようにする】【2.歴史を堅苦しいものと感じさせないカジュアルさを取り入れる】です。
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">閲覧</p>
            <p className="details">
              <a
                className="details"
                href="https://www.figma.com/design/hcbWuuN9ywHm3QgjlnCvkq/%E3%81%95%E3%81%BD%E3%83%BC%E3%81%A8%E3%81%9B%E3%82%93%E3%81%9F%E3%83%BC%EF%BC%81?node-id=475-2&t=BlexoXNp7IKOiKCY-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figmaでデザインを見る
              </a>
              <br />
              <a
                className="details"
                // href="リンク入れる"
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る(ただいま、クライアント様の都合によりサイトを閉鎖中でご覧いただけません。申し訳ございません。)
              </a>
            </p>
          </div>

          <div className="worksOverview">
            <p className="headline">種類</p>
            <p className="details">
              クライアントワーク(チーム制作) <br />
              【担当】企画・デザイン
            </p>
          </div>

          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">
              地元の方々や、学芸員OB・郷土史家がガイドとして、メジャーからマイナーまで幅広い史跡を案内しながら旅を通じて過去を生きた人々の足跡をたどり、歴史の深みに触れることで、人生をより豊かに深められる体験を提供するガイドツアーサービスです。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">歴史に興味がある大学生・大学院生</p>
          </div>

          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              『歴てく』というwebサイトを通じて、その魅力を多くの方に知っていただき、クライアントさまが企画する歴史ツアーの予約までをスムーズにサポートすること。そして、実際にツアーの体験をし、現代を生きる上でのヒントとなる「発見」をしてもらうこと。
            </p>
          </div>
          {/* <div className="worksOverview">
            <p className="headline">ご要望</p>
            <p className="details">
              ・歴史を通して、生き方のヒントが得られる旅を提供したい
              <br />
              ・歴史の堅苦しさを払拭したい
              <br />
              ・低コストで実現してほしい
              <br />
              ・webに関する知識がなくても運用できるようなwebサイトがいい
            </p>
          </div> */}
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              ユーザーがどのような感情の流れでサイトを閲覧するかを想定し、自然な導線で構成を設計しました。
              まずファーストビューでは、『歴てく』の目的や魅力を伝えて関心を引きます。次に『歴てく』は、まだ知名度の高いサービスではないため、「会社紹介」ページへの導線を設け、案内人であるクライアントさまの情報も掲載し、信頼感を高める工夫をしています。
              その後は、ツアー内容 → お知らせ
              →お問い合わせ、とユーザーが迷わず目的の情報にたどり着けるよう感情や行動の流れに寄り添ってページを配置しました。ツアー詳細ページでは見積もり金額を表示し、不安の軽減を図っています。
              また、若者がターゲットであることから、予約手段にはLINEを導入し、気軽に利用できる導線にしました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              サイトや写真の場所の印象を強く残せるよう、写真を大きく、そして豊富に配置しました。また、『歴てく』という名前の由来の一つである「てくてく歩く」というイメージを表現するために、背景に点線をあしらい、スクロールに合わせて動く遊び心のある演出も加えています。
              さらに、サイト全体の世界観として「和」をシンプルかつ直感的に感じてもらえるよう、背景には和紙のような質感の素材を使用しました。「歴史の堅苦しいイメージを払拭したい」というご要望に応えるため、フォントや装飾素材には角のない柔らかなものを選定し、ファーストビューやお問い合わせのセクションには波線を取り入れて、全体的に親しみやすくカジュアルな雰囲気を意識しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">
              4ヶ月間(企画(クライアントさまへの確認)・デザイン・コード)
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">
              Notion , Figma , Illustrator , VisualStudioCode , Line
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">学び</p>
            <p className="details">
              実際のクライアントワークとして、ヒアリングを重ねながら要望をかたちにしていく過程を経験できたことは、私にとって大きな学びとなりました。また、5チームに分かれて制作を行う中で、私たちのWebサイトが「総合的に見て最も理想的だった」と評価され、実際に使用していただけることになったことで、誰かの役に立てる喜びと達成感を強く感じました。
            </p>
          </div>
        </div>
      </div>
      {/* 作品自体の写真(PDF)など掲載。下記のどちらか選択して使わない方コメント */}
      {/* webサイト系。星の名前あるとこクラス名それぞれ変更 */}
      <div className="workSiteImgWrapper fade-slide-up">
        <div className="workSiteImgContent venusContent">
          <div className="PcImg venusPcImg"></div>
          <div className="SpImg venusSpImg"></div>
        </div>
      </div>
      {/* バナー系。星の名前あるとこクラス名それぞれ変更*/}
      {/* <div className="bannerImgWrapper">
        <div className="BannerImg venusBannerImgLeft"></div>
        <div className="BannerImg venusBannerImgRight"></div>
      </div> */}
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
