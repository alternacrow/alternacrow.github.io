import { FC } from "react";

import styles from "./Footer.module.css";

export const Footer: FC = () => (
  <footer className={styles.container}>
    <div className={styles.inner}>
      <p className={styles.copy_right}>© 2020 alternacrow</p>
    </div>
  </footer>
);
