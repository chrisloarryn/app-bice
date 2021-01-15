export const apiGet = (url: string) =>
  fetch(url, {
    method: 'GET'
  }).then((v) => v.json());
