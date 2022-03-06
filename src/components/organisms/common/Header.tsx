import React, {FC} from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

import {FontAwesome, ExternalLink} from '../../atoms';

type Props = {
  user?: {
    login: string;
    avatarUrl: string;
    bio: string;
    url: string;
    twitterUsername: string;
    email: string;
  };
};

export const Header: FC<Props> = ({user = {}}) => (
  <header className={styles.container}>
    <h1 className={styles.left}>
      <Link href={'/'} passHref>
        <a>
          <span className={styles.title}>{user.login}</span>
          <img
            className={styles.avatar}
            src={user?.avatarUrl}
            alt={user?.login}
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
        href={`https://twitter.com/${user?.twitterUsername}`}
      >
        <FontAwesome className={styles.icon} kind={'twitter'} />
      </ExternalLink>
      <ExternalLink className={styles.sns_link} href={`mailto:${user?.email}`}>
        <FontAwesome className={styles.icon} kind={'email'} />
      </ExternalLink>
    </div>
  </header>
);
