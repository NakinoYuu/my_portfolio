import Header from "../Components/header";
import AboutFv from "./aboutParts/page";
import AboutWhy from "./aboutParts/aboutWhy";
import AboutSkills from "./aboutParts/aboutSkills";
import AboutLikes from "./aboutParts/aboutLikes";
import Footer from "../Components/footer";
// css
import "@/styles/about/styles.css";

export default function About() {
  return (
    <div className="homePage">
      <Header />
      <AboutFv />
      <AboutWhy />
      <AboutSkills />
      <AboutLikes />
      <Footer />
    </div>
  );
}
