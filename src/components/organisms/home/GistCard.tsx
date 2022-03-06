import React, {FC} from 'react';
import styles from './GistCard.module.scss';

type Props = {
  gist?: {
    updatedAt: string;
    url: string;
    description: string;
  };
};

export const GistCard: FC<Props> = ({gist = {}}) => {
  return (
    <div className={styles.container}>
      <dd className={styles.description}>
        <time>{gist?.updatedAt}</time>
      </dd>
      <dt className={styles.name}>
        <a href={gist?.url}>{gist?.description}</a>
      </dt>
    </div>
  );
};
