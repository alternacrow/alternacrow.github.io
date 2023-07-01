import { FC } from "react";
import Image from "next/image";
import { SiGithub, SiTwitter } from "react-icons/si";
import { ExternalLink } from "~/components/atoms/ExternalLink";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <Image
          className={styles.titleIcon}
          src={"/icon.svg"}
          alt="alternacrow"
          width={32}
          height={32}
        />
        烏兎匆匆
      </h1>

      <nav className={styles.nav}>
        <ExternalLink href="https://github.com/alternacrow">
          <SiGithub size={24} color="var(--text)" />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/alternacrow">
          <SiTwitter size={24} color="var(--twitter)" />
        </ExternalLink>
      </nav>
    </header>
  );
};
