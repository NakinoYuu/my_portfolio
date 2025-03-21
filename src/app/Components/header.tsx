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
          <Link href="/">
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
          <Link href="/">
            <div className="rhombusShape">
              <div className="headerTitle">
                <button>Contact</button>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
