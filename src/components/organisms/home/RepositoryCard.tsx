import React, {FC} from 'react';
import styles from './RepositoryCard.module.scss';

import {FontAwesome, ExternalLink} from '../../atoms';

type Props = {
  repository?: {
    id: string;
    url: string;
    name: string;
    homepageUrl: string;
    description: string;
  };
};

export const RepositoryCard: FC<Props> = ({repository = {}}) => (
  <div className={styles.container}>
    <dt className={styles.name}>
      <ExternalLink className={styles.link} href={repository.url}>
        {repository.name}
      </ExternalLink>
      {repository.homepageUrl ? (
        <ExternalLink className={styles.link} href={repository.homepageUrl}>
          <FontAwesome className={styles.homepage_icon} kind="home" />
        </ExternalLink>
      ) : null}
    </dt>
    <dd className={styles.description}>
      <p>{repository.description}</p>
    </dd>
  </div>
);
