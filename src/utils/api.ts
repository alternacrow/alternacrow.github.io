import {GithubUser, GithubRepository, GithubGist} from '../interfaces';
import {GITHUB_API_URL, USERNAME} from '../configs';

export const fetchGithubUser = async () => {
  const url = `${GITHUB_API_URL}/users/${USERNAME}`;
  const res = await fetch(url);
  const user: GithubUser = await res.json();

  return user;
};

export const fetchGithubRepositories = async () => {
  const url = `${GITHUB_API_URL}/users/${USERNAME}/repos`;
  const res = await fetch(url);
  const repositories: GithubRepository[] = await res.json();

  return repositories;
};

export const fetchGithubGists = async () => {
  const url = `${GITHUB_API_URL}/users/${USERNAME}/gists`;
  const res = await fetch(url);
  const gists: GithubGist[] = await res.json();

  return gists;
};
