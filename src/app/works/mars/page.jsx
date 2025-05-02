"use client";
import { useEffect } from "react";

import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";
import "@/styles/works/mars.css";

export default function Mars() {
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
    <div className="marsPage">
      <Header />
      {/* ファーストビュー */}
      <div className="worksFvBg">
        <h1>Works</h1>
        <div className="worksFvContent">
          <div className="WorksThumbnail marsThumbnail">
            {/* 作品のサムネ写真 */}
          </div>
          <h2>ポモスタ</h2>
        </div>
      </div>
      {/* 作品概要 */}
      <div className="worksOverviewWrapper">
        <p className="overviewDescription fade-slide-up">
          中学3年生や高校3年生などの受験を控えた学生を対象に、同じ学校を目指す他の志望者と、自分の勉強時間を比較できる勉強サポートアプリを制作しました。勉強時間に対する不安をやわらげ、モチベーションを保ちながら学習を続けられることを目的としています。
          「少しでも勉強の疲れがやわらぐように」そんな思いを込めて、ユーザーに寄り添うようなデザインを心がけました。
        </p>
        <div className="worksOverviewContent fade-slide-up">
          <div className="worksOverview">
            <p className="headline">閲覧</p>
            <p className="details">
              <a
                className="details"
                href="https://www.figma.com/design/pQi3G0HRdgrI6q845a1CbX/%E3%83%81%E3%83%BC%E3%83%A0%E5%88%B6%E4%BD%9C?node-id=13-133&t=X6mZkUzdKIZL2C0S-1"
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
              【担当】ディレクター(チームリーダー)・企画・アプリデザイン・サブエンジニア
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">内容</p>
            <p className="details">
              受験生の不安をやわらげ、モチベーション支援型の学習サポートアプリです。
            </p>
          </div>

          <div className="worksOverview">
            <p className="headline">ターゲット</p>
            <p className="details">中学3年生、高校3年生などの受験生</p>
          </div>
          <div className="worksOverview">
            <p className="headline">目的</p>
            <p className="details">受験生の合格の手助けをすること。</p>
          </div>
          <div className="worksOverview">
            <p className="headline">情報設計</p>
            <p className="details">
              「受験生が勉強をする時にぶつかる壁や課題は何か」ということを考えながら情報設計を行いました。調査の中で、必要な勉強時間に届かない受験生の多くは、計画的な学習や集中するための環境、モチベーションの維持に課題を抱えていることがわかりました。
              そこで、目標を自分で設定し、集中しやすい仕組みを用意すれば、こうした課題を解決できるのではないかと考えました。さらに、モチベーションを高める仕掛けも加えることで、勉強時間の増加や志望校合格への後押しにつながるのではないかという仮説を立てました。
              この考えをもとに、志望校の選択や目標時間の設定、ポモドーロタイマーによる集中支援、勉強時間の可視化や応援メッセージの機能を設計し、受験生が前向きに学習に取り組める環境づくりを目指しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">デザイン</p>
            <p className="details">
              ユーザーが「自分はちゃんと頑張れている」と実感できるよう、モチベーション維持と視覚的なわかりやすさにこだわってデザインしました。青系をベースに黄色をアクセントとして使用し、夜空や星をイメージ。天の川を連想させるグラデーションで、優しい明るさと透明感を意識しました。
              マイページでは達成率を大きなグラフで表示し、努力の積み重ねを視覚化。タイマーページでは、残り時間や進捗が直感的に把握できるようにタイマーを大きく配置し、ランキングページでは順位がすぐに分かるように工夫しました。全体的に統一感を持たせ、使うたびに心が落ち着き、前向きな気持ちを持てるデザインを目指しました。
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">作成期間</p>
            <p className="details">
              週4限6時間の約5ヶ月間(企画3週間、デザイン・コード4ヶ月程度)
            </p>
          </div>
          <div className="worksOverview">
            <p className="headline">使用ツール</p>
            <p className="details">figma , Illustrator , VisualStudioCode</p>
          </div>
        </div>
      </div>
      {/* アプリ系。星の名前あるとこクラス名それぞれ変更*/}
      <div className="applicationImgWrapper fade-slide-up">
        <p>マイページ</p>
        <div className="applicationImg ">
          <div className="app appPsMyPage"></div>
          <div className="app appPsGoal"></div>
          <div className="app appPsTable"></div>
        </div>
        <p>志望校内ランキングページ</p>
        <div className="applicationImg ">
          <div className="app appPsRankingPage"></div>
          <div className="app appPsRankingDetails"></div>
        </div>
        <p>タイマーページ</p>
        <div className="applicationImg ">
          <div className="app appPsTimer"></div>
          <div className="app appPsMessageGood"></div>
          <div className="app appPsMessageNormal"></div>
          <div className="app appPsMessageBad"></div>
        </div>
      </div>
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
