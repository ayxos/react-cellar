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
  return fetch(BASE_URL + path)
  .then(function(response) {
    console.log('response', response)
    console.log('header', response.headers.get('Content-Type'))
    return response.json();
  });
}


