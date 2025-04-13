import Image from "next/image";
import Link from "next/link";

import "@/styles/Components/header.css";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <div className="logo">{/* 画像？入れる */}</div>
      </Link>
      <nav className="navigationBar">
        <div className="works">
          <Link href="/#homeWorks">
            <div className="rhombusShape">
              <div className="headerTitle">
                <button>Works</button>
              </div>
            </div>
          </Link>
        </div>
        <div className="about">
          <Link href="/about/">
            <div className="rhombusShape">
              <div className="headerTitle">
                <button>About</button>
              </div>
            </div>
          </Link>
        </div>
        <div className="contact">
          <a href="mailto:jump0411yuu@gmail.com?subject=お問い合わせ&body=”中野優”にご興味を持っていただき、ありがとうございます！ご質問等お気軽にお申し付けください！">
            <div className="rhombusShape">
              <div className="headerTitle">
                <button>Contact</button>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}
