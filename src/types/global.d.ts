type Base<T, R> = {
    code: number,
    msg: string,
    message: string,
    data: T,
    result: R
}

type TopList = Base<{
    name: string,
    categoryCode: string,
    list: {
        category: string,
        coverImgId: number,
        coverUrl: string,
        id: number,
        logName: string | null,
        name: string,
        positionInCategory: number,
        subDisplayType: string | null,
        targetType: string,
        targetUrl: string | null,
        toplistCode: number | null,
        tracks: {
            first: string,
            second: string
        }[] | null,
        updateFrequency: string | null
    }[],
    displayType: string
}[], null>

type RecommendList = Base<null, {
  allMatch: {
    keyword: string,
    type: number,
    alg: string,
    lastKeyword: string
  }[]
}>