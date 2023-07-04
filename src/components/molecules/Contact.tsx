import { FC } from "react";

import { ExternalLink } from "~/components/atoms/ExternalLink";
import styles from "./Contact.module.css";

export type ContactProps = {
  label: string;
  text: string;
  href: string;
};

export const Contact: FC<ContactProps> = ({ label, text, href }) => {
  return (
    <div className={styles.container}>
      <span>{label}: </span>
      <ExternalLink className={styles.link} href={href}>
        {text}
      </ExternalLink>
    </div>
  );
};
