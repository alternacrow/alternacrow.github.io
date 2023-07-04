import { FC, ReactNode } from "react";

import { ExternalLink } from "~/components/atoms/ExternalLink";
import styles from "./Product.module.css";

export type ProductProps = {
  title: string;
  description: string;
  appIcon: ReactNode;
  href: string;
};

export const Product: FC<ProductProps> = ({
  title,
  description,
  appIcon,
  href,
}) => {
  return (
    <ExternalLink className={styles.container} href={href}>
      <dt className={styles.title}>
        <div className={styles.appIcon}>{appIcon}</div>
        {title}
      </dt>
      <dd className={styles.description}>{description}</dd>
    </ExternalLink>
  );
};
