import { request } from './api';

const Post = async (url: string) => {
    return await request(url);
}

const toplist = () => {
    return Post('/weapi/toplist/detail/v2') as Promise<TopList>
}

export {toplist}