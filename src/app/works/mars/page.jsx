import Header from "../../Components/header";
import WorksFvBg from "../../Components/works/worksFvBg";
import BackToAllWorks from "../../Components/works/backToAllWorks";
import Footer from "../../Components/footer";
// css
import "@/styles/works/styles.css";

export default function Mars() {
  return (
    <div className="marsPage">
      <Header />
      <WorksFvBg />
      {/* 作品のサムネ写真と作品名入れる */}
      {/* 作品概要 */}
      {/* 作品自体の写真(PDF)など掲載 */}
      <BackToAllWorks />
      <Footer />
    </div>
  );
}
