import { FC } from "react";

import { ExternalLink } from "~/components/atoms/ExternalLink";
import styles from "./Gist.module.css";

const formatter = Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeZone: "Asia/Tokyo",
});

export type GistProps = {
  title: string;
  link: string;
  updatedAt: string;
};

export const Gist: FC<GistProps> = ({ title, link, updatedAt }) => {
  return (
    <div className={styles.container}>
      <dt className={styles.title}>
        <ExternalLink href={link}>{title}</ExternalLink>
      </dt>
      <dd>{formatter.format(new Date(updatedAt))}</dd>
    </div>
  );
};
