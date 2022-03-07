import React, {FC} from 'react';
import styles from './HomePage.module.scss';

import type {
  Product,
  GithubUser,
  GithubRepository,
  GithubGist,
} from '../../interfaces';

import {Layout} from '../templates';
import {ProductCard, RepositoryCard, GistCard} from '../organisms';
import {FontAwesome, ExternalLink} from '../atoms';

type Props = {
  user: GithubUser;
  products: Product[];
  repositories: GithubRepository[];
  gists: GithubGist[];
};

export const HomePage: FC<Props> = ({user, products, repositories, gists}) => (
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
        <FontAwesome className={styles.gitalt} kind="git-alt" />
        Repositories
      </h2>
      <dl className={styles.list}>
        {repositories.map(repository => (
          <RepositoryCard key={repository?.id} repository={repository} />
        ))}
      </dl>
      <ExternalLink className={styles.readmore} href={user.repos_url}>
        All Repositories
      </ExternalLink>
    </section>

    <section className={styles.section}>
      <h2 className={styles.title}>Gists</h2>
      <dl className={styles.list}>
        {gists.map(gist => (
          <GistCard key={gist?.id} gist={gist} />
        ))}
      </dl>
      <ExternalLink className={styles.readmore} href={user.gists_url}>
        All Gists
      </ExternalLink>
    </section>
  </Layout>
);
