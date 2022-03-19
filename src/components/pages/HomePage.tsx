import React, {FC} from 'react';
import styles from './HomePage.module.scss';

import type {
  Product,
  GithubUser,
  GithubRepository,
  GithubGist,
  QiitaArticle,
} from '../../interfaces';
import {USERNAME, GITHUB_GIST_URL, QIITA_URL} from '../../configs';

import {Layout} from '../templates';
import {
  ProductCard,
  GithubRepositoryCard,
  GithubGistCard,
  QiitaArticleCard,
} from '../organisms';
import {FontAwesome, ExternalLink} from '../atoms';

type Props = {
  user: GithubUser;
  products: Product[];
  repositories: GithubRepository[];
  gists: GithubGist[];
  qiitaArticles: QiitaArticle[];
};

export const HomePage: FC<Props> = ({
  user,
  products,
  repositories,
  gists,
  qiitaArticles,
}) => (
  <Layout user={user}>
    {products.length > 0 ? (
      <section className={styles.section}>
        <h2 className={styles.title}>Products</h2>
        <dl className={styles.list}>
          {products.map(product => (
            <ProductCard key={`product-${product.name}`} product={product} />
          ))}
        </dl>
      </section>
    ) : null}

    <section className={styles.section}>
      <h2 className={styles.title}>
        <FontAwesome
          className={[styles.title_icon, styles.github_icon].join(' ')}
          kind="git-alt"
        />
        Repositories
      </h2>
      <dl className={styles.list}>
        {repositories.map(repository => (
          <GithubRepositoryCard key={repository.id} repository={repository} />
        ))}
      </dl>
      <ExternalLink
        className={styles.readmore}
        href={`${user.html_url}?tab=repositories`}
      >
        {`→ All Repositories`}
      </ExternalLink>
    </section>

    <section className={styles.section}>
      <h2 className={styles.title}>
        <FontAwesome
          className={[styles.title_icon, styles.github_icon].join(' ')}
          kind="github-alt"
        />
        Gists
      </h2>
      <dl className={styles.list}>
        {gists.map(gist => (
          <GithubGistCard key={gist.id} gist={gist} />
        ))}
      </dl>
      <ExternalLink
        className={styles.readmore}
        href={`${GITHUB_GIST_URL}/${USERNAME}`}
      >
        {`→ All Gists`}
      </ExternalLink>
    </section>

    <section className={styles.section}>
      <h2 className={styles.title}>
        <img
          className={styles.title_icon}
          src={'/images/qiita.png'}
          alt={`qiita articles icon`}
        />
        Qiita Articles
      </h2>
      <dl className={styles.list}>
        {qiitaArticles.map(qiitaArticle => (
          <QiitaArticleCard key={qiitaArticle.id} qiitaArticle={qiitaArticle} />
        ))}
      </dl>
      <ExternalLink
        className={styles.readmore}
        href={`${QIITA_URL}/${USERNAME}`}
      >
        {`→ All Qiita Articles`}
      </ExternalLink>
    </section>
  </Layout>
);
