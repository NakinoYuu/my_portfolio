"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/Components/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footerBg">
      <h2 className="title">Contact</h2>
      <div className="footerContent">
        <div className="gap">{/* 横は121rem */}</div>
        <div className="detailsWrapper">
          <div className="details">
            <p className="eMail">
              <a
                className="eMail"
                href="mailto:jump0411yuu@gmail.com?subject=お問い合わせ&body=”中野優”にご興味を持っていただき、ありがとうございます！ご質問等お気軽にお申し付けください！"
              >
                jump0411yuu@gmail.com
              </a>
            </p>

            <div className="starImg"></div>
            <p className="comment">ご質問などお気軽にお問い合わせください。</p>
          </div>
          <div className="copyright">
            <small>
              <p>&copy; 2025 Yu Nakano</p>
            </small>
          </div>
        </div>
        <div className="linkWrapper">
          <div className="contentLink">
            <div className="footerLink">
              <Link href="/#homeWorks">
                <button>Works</button>
              </Link>
            </div>
            <div className="footerLink">
              <Link href="/about/">
                <button>About</button>
              </Link>
            </div>
            <div className="footerLink">
              <a href="mailto:jump0411yuu@gmail.com?subject=お問い合わせ&body=”中野優”にご興味を持っていただき、ありがとうございます！ご質問等お気軽にお申し付けください！">
                <button>Contact</button>
              </a>
            </div>
          </div>
          <div className="toTopContent">
            <button className="toTop" onClick={scrollToTop}></button>
          </div>
        </div>
      </div>
    </div>
  );
}
