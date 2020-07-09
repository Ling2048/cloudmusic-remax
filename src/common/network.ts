import { request } from './api';
import { enData } from './cmcode/index';

// const _data = "params=k58%2FWRjVUBaC0an3ntpuK%2FqfIz0gXYNG%2FDc7uS74S3U%3D&encSecKey=7beee1b32f26bcea16e812035f6cd0e232bee8bb7d4ff844634e1041451785edbb9baf1402880c33b462d94b5853a09df3e3aebc9e2f851b2db850360cc69a546fd86fa7019fb3ec467e19e1660a4335f1c48aa3fb9833b892ce7d309e4cbafe50e640f4c4326a11ce35856b28501de36d9ce32a615ca44afc7d9b8e017a8f6e";

const Post = async (url: string, data: any) => {
  return await request(url, {
    data: enData(data),
    method: 'POST',
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

const toplist = () => {
  return Post('/weapi/toplist/detail/v2', {}) as Promise<TopList>;
}

const suggest = (keyword: string) => {
  return Post('/weapi/search/suggest/keyword', {
    s: keyword
  }) as Promise<RecommendList>;
}

const hotsearchlist = () => {
  return Post('/weapi/hotsearchlist/get', {}) as Promise<HotSearchList>;
}

const search = (params: {
  s: string,
  limit: number,
  offset: number,
  queryCorrect: boolean
}) => {
  console.log({
    ...params,
    type: 1,
    strategy: 5,
  });
  return Post('/weapi/search/get', {
    ...params,
    type: 1,
    strategy: 5,
  }) as Promise<SearchList>;
}

const playlistdetail = (params: {
  id: number,
  shareUserId: number
}) => {
  return Post('/weapi/v6/playlist/detail', {
    ...params,
    n: 1e3,
    recalcSize: !1
  }) as Promise<PlayListDetail>;
}

const songdetail = (id: number) => {
  return Post('/weapi/static/songassembler/song/detail/get', {
    idversion: JSON.stringify([ {
        id: id
    } ]),
    v: 0
  }) as Promise<PlayListDetail>;
}

export { toplist, suggest, hotsearchlist, search, playlistdetail, songdetail }