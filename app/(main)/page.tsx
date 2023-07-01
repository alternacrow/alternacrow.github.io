import Image from "next/image";

import styles from "./page.module.css";
import { ProductCard } from "~/components/molecules/ProductCard";
import { ExternalLink } from "~/components/atoms/ExternalLink";
import { Header } from "~/components/organisms/Header";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />

      <main>
        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.h2}>作ったり運用してるもの</h2>
            <ExternalLink
              className={styles.productCard}
              href="https://apps.apple.com/jp/app/near-%E3%83%94%E3%83%AB%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id1662208711"
            >
              <ProductCard
                icon={
                  <Image
                    className={styles.productCardNearIcon}
                    src="/near-icon.svg"
                    alt="near"
                    width={32}
                    height={32}
                  />
                }
                title="near"
                description="女性用の体調管理アプリ"
              />
            </ExternalLink>
            <ExternalLink
              className={styles.productCard}
              href="https://mearis-studio.com"
            >
              <ProductCard
                icon={
                  <Image
                    className={styles.productCardMearisStudioIcon}
                    src="/mearis-studio-icon.svg"
                    alt="MeARIs Studio"
                    width={32}
                    height={32}
                  />
                }
                title="MeARIs Studio"
                description="女性用の体調管理アプリ"
              />
            </ExternalLink>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>雑多なメモとか</h2>

            <ul>
              <li>
                <ExternalLink className={styles.notes} href=""></ExternalLink>
              </li>
            </ul>
            <ul>
              <li>
                <ExternalLink className={styles.notes} href=""></ExternalLink>
              </li>
            </ul>
            <ul>
              <li>
                <ExternalLink className={styles.notes} href=""></ExternalLink>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
