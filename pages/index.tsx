import type {NextPage} from 'next';
import type {GetStaticProps} from 'next';
import Head from 'next/head';

import {Products} from '../src/assets/contents';
import type {
  GithubUser,
  Product,
  GithubRepository,
  GithubGist,
} from '../src/interfaces';

import {HomePage} from '../src/components/pages/HomePage';

type Props = {
  user: GithubUser;
  products: Product[];
  repositories: GithubRepository[];
  gists: GithubGist[];
};

const Home: NextPage<Props> = ({user, products, repositories, gists}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage
        user={user}
        products={products}
        repositories={repositories}
        gists={gists}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // user
  const userRes = await fetch('https://api.github.com/users/alternacrow');
  const user: GithubUser = await userRes.json();

  // repositories
  const repositoriesRes = await fetch(
    'https://api.github.com/users/alternacrow/repos',
  );
  const repositories: GithubRepository[] = await repositoriesRes.json();
  const originalRepositories = repositories.filter(repo => !repo.fork);

  // gists
  const gistsRes = await fetch(
    'https://api.github.com/users/alternacrow/gists',
  );
  const gists: GithubGist[] = await gistsRes.json();

  return {
    props: {
      user,
      products: Products,
      repositories: originalRepositories,
      gists,
    },
  };
};

export default Home;
