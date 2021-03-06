import React, { FC } from 'react';
import styled from 'styled-components';
import { media, vw, color } from '../../assets/styles';
import { products } from '../../constants';

import {
  Maybe,
  GithubDataDataUserRepositoriesNodes,
  GithubDataDataUserGistsNodes,
} from '../../types/graphql-types';

import Layout from '../organisms/layouts/layout';
import SEO from '../organisms/layouts/seo';
import { ProductCard } from '../organisms/home/product-card';
import { RepositoryCard } from '../organisms/home/repository-card';
import { GistCard } from '../organisms/home/gist-card';

type Props = {
  githubUrl?: string;
  gistUrl?: string;
  repositories?: Maybe<GithubDataDataUserRepositoriesNodes>[];
  gists?: Maybe<GithubDataDataUserGistsNodes>[];
};

export const Home: FC<Props> = ({
  githubUrl = '',
  gistUrl = '',
  repositories = [],
  gists = [],
}) => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <Title>Products</Title>
      <Products>
        {products.map(product => (
          <ProductCard key={`product-${product.name}`} product={product} />
        ))}
      </Products>
    </Section>

    <Section>
      <i className="fa fa-git-alt" style={{ fontSize: 14, color: 'red' }} />
      <Title>Repositories</Title>
      <Repositories>
        {repositories.map(repository => (
          <RepositoryCard key={repository?.id} repository={repository} />
        ))}
      </Repositories>
      <ReadMore href={githubUrl}>All Repositories</ReadMore>
    </Section>

    <Section>
      <Title>Gists</Title>
      <Gists>
        {gists.map(gist => (
          <GistCard key={gist?.id} gist={gist} />
        ))}
      </Gists>
      <ReadMore href={gistUrl}>All Gists</ReadMore>
    </Section>
  </Layout>
);

const Section = styled.section`
  margin: 32px 16px 0;

  ${media.sp} {
    margin: 0 ${vw(8)};
    padding: ${vw(24)} 0;
  }

  & + & {
    margin-top: 64px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: normal;
  color: ${color.primary};
`;

const ReadMore = styled.a`
  margin-top: 32px;
  margin-left: auto;
  display: inline-block;
  background-color: ${color.border};
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  color: ${color.white};
`;

const Products = styled.dl`
  margin-top: 12px;
`;

const Repositories = styled.dl`
  margin-top: 12px;
`;

const Gists = styled.dl`
  margin-top: 12px;
`;
