import {QiitaArticle} from '../interfaces';
import {QIITA_API_URL, USERNAME} from '../configs';

export const fetchArticles = async () => {
  const url = `${QIITA_API_URL}/users/${USERNAME}/items`;
  const res = await fetch(url);
  const qiitaArticles: QiitaArticle[] = await res.json();

  return qiitaArticles;
};
