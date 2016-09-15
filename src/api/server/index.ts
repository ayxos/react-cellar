import 'whatwg-fetch';

export const BASE_URL = '/api';

export function get(path) {
  return fetch(BASE_URL + path)
  .then((response) => response.json());
}

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

export function del(path) {
  return fetch(BASE_URL + path, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json());
}

export function postFiles(path, files) {
  let data = new FormData();
  data.append('file', files[0]);

  return fetch(BASE_URL + path, {
    method: 'POST',
    body: data
  })
    .then(response => response.json());
}
