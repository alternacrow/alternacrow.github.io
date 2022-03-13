import React, {FC} from 'react';
import styles from './GistCard.module.scss';

import type {GithubGist} from '../../../interfaces';
import {du} from '../../../utils';

import {ExternalLink} from '../../atoms';

type Props = {
  gist?: Partial<GithubGist>;
};

export const GistCard: FC<Props> = ({gist = {}}) => {
  return (
    <div className={styles.container}>
      <dd className={styles.description}>
        {gist.updated_at ? (
          <time dateTime={gist.updated_at}>
            {du.localDateStringFromISOString(gist.updated_at, 'YYYY/MM/DD')}
          </time>
        ) : null}
      </dd>
      <dt className={styles.name}>
        <ExternalLink href={gist.html_url}>{gist.description}</ExternalLink>
      </dt>
    </div>
  );
};
