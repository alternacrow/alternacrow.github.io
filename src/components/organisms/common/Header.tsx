import React, {FC} from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

import type {GithubUser} from '../../../interfaces';
import avatar from '../../../assets/images/icon.svg';

import {FontAwesome, ExternalLink} from '../../atoms';

type Props = {
  user: GithubUser;
};

export const Header: FC<Props> = ({user}) => (
  <header className={styles.container}>
    <h1 className={styles.left}>
      <Link href={user.url} passHref>
        <a>
          <span className={styles.title}>{user.login}</span>
          <img
            className={styles.avatar}
            src={'/images/icon.svg'}
            alt={user.login}
          />
          <p className={styles.bio}>{user?.bio}</p>
        </a>
      </Link>
    </h1>
    <div className={styles.right}>
      <ExternalLink className={styles.sns_link} href={user?.url}>
        <FontAwesome className={styles.icon} kind={'github'} />
      </ExternalLink>
      <ExternalLink
        className={styles.sns_link}
        href={`https://twitter.com/alternacrow`}
      >
        <FontAwesome className={styles.icon} kind={'twitter'} />
      </ExternalLink>
      <ExternalLink className={styles.sns_link} href={`mailto:${user.email}`}>
        <FontAwesome className={styles.icon} kind={'email'} />
      </ExternalLink>
    </div>
  </header>
);
