import axios from 'axios';

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

  return result.data.query;
};
