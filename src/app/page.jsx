import Header from "./Components/header";
import HomeFv from "./home/fv";
import HomeChoice from "./home/choice";
import HomeWorks from "./home/works";
import HomeAbout from "./home/about";
import HomeBye from "./home/bye";
import Footer from "./Components/footer";
// css
import "@/styles/home/styles.css";

export default function Home() {
  return (
    <div className="homePage">
      <Header />
      <HomeFv />
      <HomeChoice />
      <HomeWorks />
      <HomeAbout />
      <HomeBye />
      <Footer />
    </div>
  );
}
