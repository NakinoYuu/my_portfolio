import Image from "next/image";
import Link from "next/link";

import "@/styles/home/about.css";

export default function HomeAbout() {
  return (
    <div className="aboutBg">
      <h2 className="title">About</h2>
      <div className=" aboutContent">
        <div className="details">
          <div className="myPhoto">{/* 自分の画像何かしら描いて入れる */}</div>
          <div className="selfIntroduction">
            <p>名　前 : 中野優(隊長)</p>
            <p>誕生日 : 2004年4月11日</p>
            <p>出身地 : 地球 (大阪府在住)</p>
            <p className="like">
              宇宙やデザインのような、” 正解”がないものを考えることが好きです。
              哲学について考えたり、議論するのも好きだったりします...( ´ - ` )｡○
            </p>
          </div>
        </div>
        <Link href="/about/">
          <button className="more">{/* ロケットの画像入れる */}</button>
        </Link>
      </div>
    </div>
  );
}
