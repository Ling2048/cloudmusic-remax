type Base<D, R> = {
    code: number,
    msg: string,
    message: string,
    data: D,
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

type HotSearchList = Base<{
  searchWord: string,
  score: number,
  content: string,
  source: number,
  iconType: number,
  iconUrl: string | null,
  url: string,
  alg: string
}[], null>

type SearchList = Base<null, {
  highlights: string[],
  rec_query: string | null,
  rec_type: string | null,
  songs: {
    name: string,
    id: number,
    pst: number,
    t: number,
    ar: {
      id: number,
      name: string,
      tns: string[],
      alias: {}[]
    }[],
    alia: {}[],
    pop: number,
    st: number,
    rt: string,
    fee: number,
    v: number,
    crbt: string | null,
    cf: string,
    al: {
      id: number,
      name: string,
      picUrl: string,
      tns: string[],
      pic: number
    },
    dt: number,
    h: {
      br: number,
      fid: number,
      size: number,
      vd: number,
    },
    m: {
      br: number,
      fid: number,
      size: number,
      vd: number
    },
    l: {
      br: number,
      fid: number,
      size: number,
      vd: number
    },
    a: string | null,
    cd: number,
    no: number,
    rtUrl: string | null,
    ftype: number,
    rtUrls: string[],
    djId: number,
    copyright: number,
    s_id: number,
    mark: number,
    originCoverType: number,
    noCopyrightRcmd: string | null,
    rtype: number,
    rurl: string | null,
    mst: number,
    cp: number,
    mv: number,
    publishTime: number,
    showRecommend: boolean,
    recommendText: string | null,
    officialTags: boolean,
    privilege: {
      id: number,
      fee: number,
      payed: number,
      st: number,
      pl: number,
      dl: number,
      sp: number,
      cp: number,
      subp: number,
      cs: boolean,
      maxbr: number,
      fl: number,
      toast: boolean,
      flag: number
    },
    alg: string
  }[],
  songCount: number
}>