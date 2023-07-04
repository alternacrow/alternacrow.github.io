import Image from "next/image";
import { Octokit } from "@octokit/rest";

import { Header } from "~/components/organisms/Header";
import { Footer } from "~/components/organisms/Footer";
import { Product, ProductProps } from "~/components/molecules/Product";
import { Contact, ContactProps } from "~/components/molecules/Contact";
import { Gist } from "~/components/molecules/Gist";
import { ExternalLink } from "~/components/atoms/ExternalLink";
import styles from "./page.module.css";

const products: ProductProps[] = [
  {
    title: "near",
    description: "女性用の体調管理アプリ",
    appIcon: (
      <Image
        className={styles.productCardNearIcon}
        src="/near-icon.svg"
        alt="near"
        width={32}
        height={32}
      />
    ),
    href: "https://apps.apple.com/jp/app/near-%E3%83%94%E3%83%AB%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id1662208711",
  },
  {
    title: "MeARIs Studio",
    description: "MeARIs様のホームページ",
    appIcon: (
      <Image
        className={styles.productCardMearisStudioIcon}
        src="/mearis-studio-icon.svg"
        alt="MeARIs Studio"
        width={32}
        height={32}
      />
    ),
    href: "https://mearis-studio.com",
  },
];

const contacts: ContactProps[] = [
  {
    label: "Gmail",
    text: "k.horita21@gmail.com",
    href: "mailto:k.horita21@gmail.com",
  },
  {
    label: "Twitter",
    text: "@alternacrow",
    href: "https://twitter.com/alternacrow",
  },
  {
    label: "GitHub",
    text: "alternacrow",
    href: "https://github.com/alternacrow",
  },
];

export default async function Home() {
  const octokit = new Octokit();
  const { data: gists } = await octokit.gists.listForUser({
    username: "alternacrow",
  });

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Profile</h2>
            <dl className={styles.profile}>
              <dt>Jobs</dt>
              <dd>
                I am a front-end developer and work for{" "}
                <ExternalLink href="https://207-inc.com/">
                  207 Inc.
                </ExternalLink>
              </dd>
              <dt>Skills</dt>
              <dd>TypeScript / React / React Native / Node.js</dd>
            </dl>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal Work</h2>
            <dl>
              {products.map((product) => {
                return (
                  <div key={product.title} className={styles.productCard}>
                    <Product {...product} />
                  </div>
                );
              })}
            </dl>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <nav>
              <ul>
                {contacts.map((contact) => {
                  return (
                    <li key={contact.label} className={styles.contactItem}>
                      <Contact {...contact} />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Notes</h2>
            <dl>
              {gists.map((gist) => {
                return (
                  <div key={gist.id} className={styles.gistCard}>
                    <Gist
                      title={gist.description ?? `Gist ID: ${gist.id}`}
                      link={gist.html_url}
                      updatedAt={gist.updated_at}
                    />
                  </div>
                );
              })}
            </dl>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
