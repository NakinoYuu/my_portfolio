import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";

export default function Saturn() {
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
          <h2>コスメバナー</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription">
          作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要作品概要
        </p>
        <div className="worksOverviewContent">
          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">
              クライアントワーク、習作、自主制作とかそんなの
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">〜〜〜〜な人 </p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">〜〜〜〜を〜〜〜〜するため </p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              自分が作品を作るときに企画としてとかデザインで意識したこと{" "}
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              自分が作品を作るときにデザインで意識したこと{" "}
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">
              2ヶ月間(企画(確認)2週間、デザイン3ヶ月、コード1ヶ月){" "}
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">figma </p>
          </div>
        </div>
      </div>

      {/* 作品自体の写真(PDF)など掲載。下記のどちらか選択して使わない方コメント */}
      {/* webサイト系。星の名前あるとこクラス名それぞれ変更 */}
      <div className="workSiteImgWrapper">
        <div className="workSiteImgContent saturnContent">
          <div className="PcImg saturnPcImg"></div>
          <div className="SpImg saturnSpImg"></div>
        </div>
      </div>
      {/* バナー系。星の名前あるとこクラス名それぞれ変更*/}
      {/* <div className="bannerImgWrapper">
        <div className="BannerImg saturnBannerImgLeft"></div>
        <div className="BannerImg saturnBannerImgRight"></div>
      </div> */}
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
