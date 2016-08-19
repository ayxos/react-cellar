import 'whatwg-fetch';

export const BASE_URL = '/api';

export function post(path, data) {
  return fetch(BASE_URL + path, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

export function get(path) {
  return fetch(BASE_URL + path, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log('RES', response);
    return response.json();
  });
}


