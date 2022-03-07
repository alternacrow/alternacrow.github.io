import GithubUserMock from './__mock__/user.json';
import GithubRepositoriesMock from './__mock__/repositories.json';
import GithubGistsMock from './__mock__/gists.json';

export type GithubUser = typeof GithubUserMock;
export type GithubRepository = typeof GithubRepositoriesMock[number];
export type GithubGist = typeof GithubGistsMock[number];
