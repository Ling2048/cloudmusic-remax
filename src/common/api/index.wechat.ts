import { request } from 'remax/wechat';
const base = 'https://music.163.com';

const requestWX = (url: string, init: { data: any, headers: any, method: string }) => {
  return request({
    url: base + url,
    header: init.headers,
    method: init.method as any,
    data: init.data,
  }).then(res => res.data);
}

export { requestWX as request }