import { post } from '../server/';

const WINE_ERR_MSG = `
  The wine you have entered is invalid.
`;

export function wine(wine) {
  return new Promise((resolve, reject) => {
    return post('/wines', wine)
    .then(json => resolve(json.meta))
    .then(null, (err) => reject(new Error(WINE_ERR_MSG)));
  });
}
