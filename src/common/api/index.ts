const request = (url: string, init: { data: any, headers: any, method: string }) => {
  return fetch(url, {
    body: init.data,
    headers: init.headers,
    method: init.method
  }).then(res => res.json());
}

export { request }