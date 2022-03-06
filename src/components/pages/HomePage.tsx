import React, {FC} from 'react';
import styles from './HomePage.module.scss';

import {products} from '../../assets/contents/products';

import {Layout} from '../templates';
import {ProductCard, RepositoryCard, GistCard} from '../organisms';
import {FontAwesome, ExternalLink} from '../atoms';

type Props = {
  githubUrl?: string;
  gistUrl?: string;
  repositories?: {
    id: string;
    url: string;
    name: string;
    homepageUrl: string;
    description: string;
  }[];
  gists?: {
    id: string;
    updatedAt: string;
    url: string;
    description: string;
  }[];
};

export const HomePage: FC<Props> = ({
  githubUrl = '',
  gistUrl = '',
  repositories = [],
  gists = [],
}) => (
  <Layout>
    <section className={styles.section}>
      <h2 className={styles.title}>Products</h2>
      <dl className={styles.list}>
        {products.map(product => (
          <ProductCard key={`product-${product.name}`} product={product} />
        ))}
      </dl>
    </section>

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
      <ExternalLink className={styles.readmore} href={githubUrl}>
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
      <ExternalLink className={styles.readmore} href={gistUrl}>
        All Gists
      </ExternalLink>
    </section>
  </Layout>
);
