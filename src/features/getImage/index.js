import axios from 'axios';

// Wikimediaから画像を取得する
export const getImage = async (query) => {
  // query 検索ワード
  const result = await axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      origin: '*',
      action: 'query',
      prop: 'pageimages',
      gsrsearch: query,
      generator: 'search',
      pithumbsize: 300,
      format: 'json',
    },
    headers: {
      withCredentials: false,
      'Access-Control-Allow-Credentials': false,
    },
  });

  const pages = Object.values(result.data.query.pages);

  let thumbnailUrl = '';
  for (const page of pages) {
    if (page.index === 1) {
      thumbnailUrl = page?.thumbnail?.source || '';
    }
  }

  return thumbnailUrl;
};
