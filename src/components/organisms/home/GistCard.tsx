import React, {FC} from 'react';
import styles from './GistCard.module.scss';

import type {GithubGist} from '../../../interfaces';

type Props = {
  gist?: Partial<GithubGist>;
};

export const GistCard: FC<Props> = ({gist = {}}) => {
  return (
    <div className={styles.container}>
      <dd className={styles.description}>
        <time>{gist.updated_at}</time>
      </dd>
      <dt className={styles.name}>
        <a href={gist.url}>{gist.description}</a>
      </dt>
    </div>
  );
};
