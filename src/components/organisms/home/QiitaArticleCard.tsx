import React, {FC} from 'react';
import styles from './QiitaArticleCard.module.scss';

import type {QiitaArticle} from '../../../interfaces';
import {du} from '../../../utils';

import {ExternalLink} from '../../atoms';

type Props = {
  qiitaArticle?: Partial<QiitaArticle>;
};

export const QiitaArticleCard: FC<Props> = ({qiitaArticle = {}}) => {
  return (
    <div className={styles.container}>
      <dd className={styles.description}>
        {qiitaArticle.updated_at ? (
          <time dateTime={qiitaArticle.updated_at}>
            {du.localDateStringFromISOString(
              qiitaArticle.updated_at,
              'YYYY/MM/DD',
            )}
          </time>
        ) : null}
      </dd>
      <dt className={styles.name}>
        <ExternalLink href={qiitaArticle.url}>
          {qiitaArticle.title}
        </ExternalLink>
      </dt>
    </div>
  );
};
