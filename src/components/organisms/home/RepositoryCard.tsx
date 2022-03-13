import React, {FC} from 'react';
import styles from './RepositoryCard.module.scss';

import type {GithubRepository} from '../../../interfaces';
import {du} from '../../../utils';

import {FontAwesome, ExternalLink} from '../../atoms';

type Props = {
  repository?: Partial<GithubRepository>;
};

export const RepositoryCard: FC<Props> = ({repository = {}}) => (
  <div className={styles.container}>
    <dt className={styles.title}>
      <ExternalLink className={styles.link} href={repository.html_url}>
        {repository.name}
      </ExternalLink>
      {repository.homepage ? (
        <ExternalLink className={styles.link} href={repository.homepage}>
          <FontAwesome className={styles.homepage_icon} kind="home" />
        </ExternalLink>
      ) : null}
    </dt>
    <dd>
      <p className={styles.description}>{repository.description}</p>
      <div className={styles.sub}>
        {repository.archived ? (
          <FontAwesome className={styles.archived_icon} kind="file-zipper" />
        ) : null}
        {repository.updated_at ? (
          <time className={styles.updated_on} dateTime={repository.updated_at}>
            {`Updated on ${du.localDateStringFromISOString(
              repository.updated_at,
              'MMMM D, YYYY',
            )}`}
          </time>
        ) : null}
      </div>
    </dd>
  </div>
);
