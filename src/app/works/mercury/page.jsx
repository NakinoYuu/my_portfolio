import Header from "../../Components/header";
// import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/mercury.css";

export default function Mercury() {
  return (
    <div className="mercuryPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail mercuryThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>Port Folio(当サイト)</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription">
          就職活動にあたり、ポートフォリオサイトを制作いたしました。ご覧いただく中で少しでも楽しさを感じていただけるよう、企画・デザイン・動きの細部にまでストーリー性や一貫性を持たせることを意識して取り組みました。
        </p>
        <div className="worksOverviewContent">
          <div className="worksOverview">
            <p className="headline">種類</p>
            <p className="details">自主制作</p>
          </div>
          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">web会社の採用担当者の方々</p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              就職活動にあたっては、私自身の人となりを知っていただくこと、そしてこれまでの制作物やそれに対する考えをお伝えするため。また、書類選考の際に興味を持っていただくため。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              まず、ファーストビューではポートフォリオの世界観を感じていただけるよう、背景や文字に動きをつけました。閲覧時に少しでも「楽しい」と感じていただけるよう、私が描いた3名のキャラクターを登場させ、選択できる仕組みにすることで遊び心を演出しています。
              選んだキャラクターとともに、各惑星（＝制作物）を探検していただく構成とし、採用ご担当者さまが最も関心をお持ちになるであろう制作物を、ファーストビューの直後に配置しました。また、一度閲覧した惑星は透明度が下がる仕様にすることで、誤って同じページを開いてしまうことを防いでいます。
              さらにご興味をお持ちいただいた方には、プロフィールページをご覧いただくことで、私自身の背景や考えをより深く知っていただけるようにしています。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              「可能性は無限大」というコンセプトのもと、ポートフォリオ全体を“宇宙”の世界観でデザインしました。「冒険」や「ワクワク」といったキーワードを軸に、見た目の美しさと可愛らしさのバランスを意識しながら、印象に残る構成を目指しています。
              スマートフォンからも快適に閲覧できるようにレスポンシブ対応を行い、特に見てほしい作品には、惑星をその場で大小に動かす演出を取り入れて視線誘導を工夫しました。すべてに動きをつけるのではなく、あえて数を絞ることで、注目してほしい箇所が埋もれないようにしています。
              また、イラストは親しみやすい可愛らしいタッチで統一し、フォントには「Kaisei
              Decol」を使用。整った配置と組み合わせることで、洗練された美しさを表現しました。キャラクターを選ぶという導入の過程を加えることで、見る方が楽しみながら世界観に入り込める、“型にとらわれないポートフォリオ”を目指しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">
              2ヶ月間(企画2週間、デザイン2週間、コード1ヶ月)
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">
              Figma,ProCreate,Illustrator,VisualStudioCode
            </p>
          </div>
        </div>
      </div>
      {/* 作品自体の写真(PDF)など掲載。下記のどちらか選択して使わない方コメント */}
      {/* webサイト系。星の名前あるとこクラス名それぞれ変更 */}
      <div className="workSiteImgWrapper">
        <div className="workSiteImgContent mercuryContent">
          <div className="PcImg mercuryPcImg"></div>
          <div className="SpImg mercurySpImg"></div>
        </div>
      </div>
      {/* バナー系。星の名前あるとこクラス名それぞれ変更*/}
      {/* <div className="bannerImgWrapper">
        <div className="BannerImg mercuryBannerImgLeft"></div>
        <div className="BannerImg mercuryBannerImgRight"></div>
      </div> */}

      <BackToAllWorks />
      <Footer />
    </div>
  );
}
