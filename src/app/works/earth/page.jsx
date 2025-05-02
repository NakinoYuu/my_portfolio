"use client";
import { useEffect } from "react";
import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/earth.css";

export default function Earth() {
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
    <div className="earthPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail earthThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>Nail Pallet</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          セルフネイルやネイルアートに興味を持つ方々に向けて、「セルフネイルの世界を繋ぐ」をテーマとしたサブスクリプション型のアプリを制作しました。
          【デザインの収集】【気になる商品の購入】【デザインを参考にしながらセルフネイルをする】【完成したセルフネイルの投稿】まで、セルフネイルに関わる体験をすべてこのアプリ内で完結できるよう設計しました。
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">閲覧</p>
            <p className="details">
              <a
                className="details"
                href="https://www.figma.com/design/OIl7JbDyvxgFSAkHVsz9E5/NailPalette?node-id=189-869&t=sXXCRZaGXsKmJgpU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figmaでデザインを見る
              </a>
            </p>
          </div>

          <div className="worksOverview">
            <p className="headline">種類</p>
            <p className="details">
              習作(チーム制作) <br />
              【担当】デザイン
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">
              セルフネイルに関する一連の体験をひとつで完結できるサブスクリプションサービスです。
            </p>
          </div>

          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">
              【メイン】セルフネイルをする人・【サブ】ネイル関連に興味を持つ人
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">
              このアプリひとつで、セルフネイルに必要な一連の体験を完結させるため。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              「自分に合った距離感と使い方でアプリを楽しめる」ことを軸に、「共有」「シームレス」「ネットショッピング」の3つのキーワードをもとに情報設計を行いました。
              「閲覧 ▶︎ 保存・購入 ▶︎（実践）▶︎
              投稿」という一連の流れを自然につなげることで、ユーザーが迷わず目的を達成できるよう、画面遷移や操作性の一貫性を大切にしています。とくに閲覧機能では、使用されているアイテムの確認から保存・購入までをスムーズに行える導線を設計しました。
              投稿時には、コメントのON/OFFを選択できるようにし、「見てもらいたい」「記録として残したい」「技術を磨きたい」など、ユーザーのスタンスに応じた使い方ができるよう配慮。また、気になったユーザーと自然につながれるプロフィール交換機能を取り入れることで、心地よい距離感でのコミュニケーションも可能にしています。
              さらに、今回は「ユーザー同士が深くつながること」を主目的としていないため、フォロー機能やDM機能はあえて搭載していません。多様な目的やスタイルに応じて、誰もが直感的に使える柔軟な設計を目指しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              ユーザーが迷わず快適にアプリを使えるよう、「シンプルで直感的な操作性」と「心地よい視覚体験」を重視してデザインを設計しました。
              視線の流れを自然に誘導するため、文字情報はタイトルと説明文でフォントサイズに差をつけ、隙間などの数値も一貫性を持たせることで、メリハリのある視認性の高いレイアウトを意識しています。
              また、テキストやアイコンのサイズ・間隔を丁寧に整えることで、安心感のある画面づくりを追求。メインカラーにはやわらかさと個性を兼ね備えたラベンダーを採用し、感性豊かなネイルユーザーの世界観に調和する色合いに。サブカラーやアクセントカラーにも可読性と使いやすさを損なわないトーンを選び、コントラストと統一感のバランスを大切にしました。
              さらに、フッターにはグラスモーフィズムを用いて視覚的ノイズを抑えつつ画面に自然に馴染ませ、検索ボタン等は右利きユーザーの操作性に配慮して右上に配置するなど、細部にまでユーザー視点を反映させています。
              細部まで配慮を重ねることで、快適で直感的な操作が可能になることを目指しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">
              3ヶ月(企画2週間、デザイン1ヶ月、コード1ヶ月2週間) <br />
              (友人が私のデザインに興味を持ってくれ、授業外で実装に取り組んでくれました。)
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">Figma , Illustrator , VisualStudioCode</p>
          </div>
        </div>
      </div>
      {/* 作品自体の写真(PDF)など掲載。下記のどちらか選択して使わない方コメント */}
      {/* アプリ系。星の名前あるとこクラス名それぞれ変更*/}
      <div className="applicationImgWrapper fade-slide-up">
        <p>閲覧・購入画面</p>
        <div className="applicationImg ">
          <div className="app appNpHome"></div>
          <div className="app appNpConfirmation"></div>
          <div className="app appNpShopping"></div>
        </div>
        <p>保存・メニュー画面</p>
        <div className="applicationImg ">
          <div className="app appNpKeep"></div>
          <div className="app appNpKeepDetails"></div>
          <div className="app appNpMenu"></div>
        </div>
        <p>投稿画面</p>
        <div className="applicationImg ">
          <div className="app appNpPost"></div>
          <div className="app appNpMessage"></div>
          <div className="app appNpPostComplete"></div>
        </div>
        <p>マイページ・プロフィール交換画面</p>
        <div className="applicationImg ">
          <div className="app appNpMyPage"></div>
          <div className="app appNpProfile"></div>
          <div className="app appNpTrade"></div>
          <div className="app appNpTradeComplete"></div>
        </div>
      </div>
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
