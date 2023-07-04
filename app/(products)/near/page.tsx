import Image from "next/image";
import { Abhaya_Libre } from "next/font/google";

import styles from "./page.module.css";

const abhayaLibre = Abhaya_Libre({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${abhayaLibre.className}`}>near</h1>

      <div className={styles.nearImage}>
        <Image
          className={styles.img}
          src="/near-image.png"
          alt="App Image"
          width={1012 / 4}
          height={2050 / 4}
        />
      </div>

      <div className={styles.description}>
        <p>【機能と特徴】</p>
        <p>・アカウント登録不要</p>
        <p>・シンプルな機能と設定</p>
        <p>・プッシュ通知によるアラーム（スヌーズあり）</p>
        <p>・メモやスタンプのあるカレンダー機能</p>
        <br />
        <p>【使い方】</p>
        <p>はじめに、設定画面で通知設定を行います。</p>
        <p>その後は、通知が来たらお薬のボタンを押すだけです。</p>
        <br />
        <p>【注意】</p>
        <p>アプリを削除すると以前のデータは消え、復元は出来ません。</p>
        <br />
        <a
          className={styles.link}
          href="https://apps.apple.com/ja/app/near-%E3%83%94%E3%83%AB%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id1662208711"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Storeへ →
        </a>
      </div>
    </div>
  );
}
