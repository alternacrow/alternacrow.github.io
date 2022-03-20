import type {NextPage} from 'next';
import type {GetStaticProps} from 'next';
import {Head} from '../src/utils';

import type {
  GithubUser,
  Product,
  GithubRepository,
  GithubGist,
  QiitaArticle,
} from '../src/interfaces';
import {github, qiita} from '../src/utils';
import {Products} from '../src/assets/contents';

import {HomePage} from '../src/components/pages/HomePage';

type Props = {
  user: GithubUser;
  products: Product[];
  repositories: GithubRepository[];
  gists: GithubGist[];
  qiitaArticles: QiitaArticle[];
};

const Home: NextPage<Props> = ({
  user,
  products,
  repositories,
  gists,
  qiitaArticles,
}) => {
  return (
    <>
      <Head title="Home" description="I love web development!!" />
      <HomePage
        user={user}
        products={products}
        repositories={repositories}
        gists={gists}
        qiitaArticles={qiitaArticles}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // user
  const user = await github.fetchUser();

  // repositories
  const repositories = await github.fetchRepositories();
  const originalRepositories = repositories
    .filter(repo => !repo.fork)
    .sort((_a, b) => (b.archived ? -1 : 1));

  // gists
  const gists: GithubGist[] = await github.fetchGists();

  // qiita articles
  const qiitaArticles: QiitaArticle[] = await qiita.fetchArticles();

  return {
    props: {
      user,
      products: Products,
      repositories: originalRepositories.slice(0, 10),
      gists: gists.slice(0, 10),
      qiitaArticles: qiitaArticles.slice(0, 10),
    },
  };
};

export default Home;
