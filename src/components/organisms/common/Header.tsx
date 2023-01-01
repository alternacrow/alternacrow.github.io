import React, {FC} from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import {EMAIL} from '../../../configs';

import type {GithubUser} from '../../../interfaces';

import {FontAwesome, ExternalLink} from '../../atoms';

type Props = {
  user: GithubUser;
};

export const Header: FC<Props> = ({user}) => (
  <header className={styles.container}>
    <h1 className={styles.profile}>
      <Link href={user.html_url} passHref>
        <a>
          <span className={styles.title}>{user.login}</span>
          <img
            className={styles.avatar}
            src={'/icon.svg'}
            width={28}
            height={28}
            alt={user.login}
          />
          <p className={styles.bio}>{user?.bio}</p>
        </a>
      </Link>
    </h1>
    <div className={styles.link_list}>
      <ExternalLink
        className={styles.sns_link}
        href={user.html_url}
        aria-label="github"
      >
        <FontAwesome className={styles.icon} kind={'github'} />
      </ExternalLink>
      <ExternalLink
        className={styles.sns_link}
        href={`https://twitter.com/alternacrow`}
        aria-label="twitter"
      >
        <FontAwesome className={styles.icon} kind={'twitter'} />
      </ExternalLink>
      <ExternalLink
        className={styles.sns_link}
        href={`mailto:${EMAIL}`}
        aria-label="email"
      >
        <FontAwesome className={styles.icon} kind={'email'} />
      </ExternalLink>
    </div>
  </header>
);
