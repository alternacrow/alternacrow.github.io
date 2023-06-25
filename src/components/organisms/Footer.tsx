import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => (
  <footer className={styles.container}>
    <p className={styles.copy_right}>© 2020 alternacrow</p>
  </footer>
);
