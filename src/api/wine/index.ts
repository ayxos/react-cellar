import { get, post } from '../server/';

const WINE_ERR_MSG = `
  The wine you have entered is invalid.
`;

export function setWine(wine) {
  return new Promise((resolve, reject) => {
    return post('/wines', wine)
    .then(json => resolve(json.meta))
    .then(null, (err) => reject(new Error(WINE_ERR_MSG)));
  });
}

export function wines() {
  return new Promise((resolve, reject) => {
    return get('/wines')
    .then(json => resolve(json))
    .then(null, (err) => reject(new Error(WINE_ERR_MSG)));
  });
}

export function getWine(id) {
  return new Promise((resolve, reject) => {
    return get('/wine/' + id)
      .then(json => resolve(json))
      .then(null, (err) => reject(new Error(WINE_ERR_MSG)));
  });
}
