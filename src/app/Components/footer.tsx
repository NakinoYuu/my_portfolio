import Image from "next/image";
import Link from "next/link";

import "@/styles/Components/footer.css";

export default function Footer() {
  return (
    <div className="footerBg">
      <h2 className="title">Contact</h2>
      <div className="footerContent">
        <div className="gap">{/* 横は121rem */}</div>
        <div className="detailsWrapper">
          <div className="details">
            <p className="eMail">jump0411yuu@gmail.com</p>
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
              <Link href="/">
                <button>Works</button>
              </Link>
            </div>
            <div className="footerLink">
              <Link href="/">
                <button>About</button>
              </Link>
            </div>
            <div className="footerLink">
              <Link href="/">
                <button>Contact</button>
              </Link>
            </div>
          </div>
          <div className="toTopContent">
            <Link href="/">
              <button className="toTop">{/* ロケットの画像入れる */}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
