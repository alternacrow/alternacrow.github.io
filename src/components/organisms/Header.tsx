import { FC } from "react";

import Image from "next/image";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Image
            className={styles.icon}
            src={"/icon.svg"}
            alt="alternacrow"
            width={32}
            height={32}
          />
          alternacrow
        </h1>
      </div>
    </header>
  );
};
