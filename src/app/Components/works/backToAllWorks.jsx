import Image from "next/image";
import Link from "next/link";

import "@/styles/Components/works/backToAllWorks.css";
export default function BackToAllWorks() {
  return (
    <div className="backToAllWorksBg">
      <Link href="/">
        <button className="backToAllWorks">
          <p>作品一覧へ戻る</p>
        </button>
      </Link>
    </div>
  );
}
