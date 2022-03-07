import React, {FC} from 'react';
import styles from './RepositoryCard.module.scss';

import type {GithubRepository} from '../../../interfaces';

import {FontAwesome, ExternalLink} from '../../atoms';

type Props = {
  repository?: Partial<GithubRepository>;
};

export const RepositoryCard: FC<Props> = ({repository = {}}) => (
  <div className={styles.container}>
    <dt className={styles.name}>
      <ExternalLink className={styles.link} href={repository.url}>
        {repository.name}
      </ExternalLink>
      {repository.homepage ? (
        <ExternalLink className={styles.link} href={repository.homepage}>
          <FontAwesome className={styles.homepage_icon} kind="home" />
        </ExternalLink>
      ) : null}
    </dt>
    <dd className={styles.description}>
      <p>{repository.description}</p>
    </dd>
  </div>
);
