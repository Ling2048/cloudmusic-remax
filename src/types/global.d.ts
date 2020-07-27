type OmitArg<F> = F extends (...args: any) => infer R ? () => R : never;

type RouteProps<Q> = {
  location?: {
    query: Q
  }
}

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

type AL = {
  id: number,
  name: string,
  picUrl: string,
  tns: string[],
  pic: number,
  pic_str: string
}

type AR = {
  id: number,
  name: string,
  tns: string[],
  alias: {}[]
}[]

type PlayListDetail = Base<null, null> & {
  playlist: {
    coverImgId_str: number,
    subscribedCount: number,
    description: string,
    name: string,
    playCount: number,
    coverImgUrl: string,
    creator: {
      nickname: string,
      avatarUrl: string,
    },
    tracks: {
      name: string,
      id: number,
      fee: number,
      ar: AR,
      al: AL
    }[]
  },
  privileges: {
    flag: number,
    maxbr: number,
    st: number,
    fee: number,
    payed: number,
    pl: number
  }[]
}

type SongDetail = Base<{
  name: string,
  al: AL,
  ar: AR
}[], null>

type SongLyrics = Base<null, null> & {
  lrc: {
    version: number,
    lyric: string,
  },
  tlyric: {
    version: number,
    lyric: string,
  },
  qfy: boolean,
  sfy: boolean,
  sgc: boolean,
  nolyric: boolean,
  uncollected: boolean
}

type Privilege = {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  // chargeInfoList: ChargeInfoList[];
}

type Artist = {
  img1v1Id: any;
  topicPerson: number;
  musicSize: number;
  albumSize: number;
  alias: any[];
  picId: number;
  briefDesc: string;
  followed: boolean;
  img1v1Url: string;
  trans: string;
  picUrl: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

type Album = {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  alias: any[];
  // artists: Artist2[];
  copyrightId: number;
  picId: any;
  // artist: Artist3;
  publishTime: any;
  company: string;
  briefDesc: string;
  commentThreadId: string;
  picUrl: string;
  pic: any;
  blurPicUrl: string;
  companyId: number;
  tags: string;
  description: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}

type SimiSong = Base<null, null> & {
  songs:  {
    starred: boolean;
    popularity: number;
    starredNum: number;
    playedNum: number;
    dayPlays: number;
    hearTime: number;
    mp3Url: string;
    rtUrls?: any;
    mark: number;
    noCopyrightRcmd?: any;
    // hMusic: HMusic;
    // mMusic: MMusic;
    // lMusic: LMusic;
    alias: any[];
    artists: Artist[];
    score: number;
    copyrightId: number;
    album: Album;
    audition?: any;
    copyFrom: string;
    ringtone: string;
    disc: string;
    no: number;
    fee: number;
    commentThreadId: string;
    mvid: number;
    rtUrl?: any;
    ftype: number;
    // bMusic: BMusic;
    rtype: number;
    rurl?: any;
    crbt?: any;
    duration: number;
    position: number;
    status: number;
    name: string;
    id: number;
    recommendReason: string;
    privilege: Privilege;
    alg: string;
  }[]
}

declare module SongComment {

  export interface Associator {
      vipCode: number;
      rights: boolean;
  }

  export interface MusicPackage {
      vipCode: number;
      rights: boolean;
  }

  export interface VipRights {
      associator: Associator;
      musicPackage: MusicPackage;
      redVipAnnualCount: number;
  }

  export interface User {
      locationInfo: string;
      liveInfo?: any;
      anonym: number;
      userId: number;
      avatarUrl: string;
      authStatus: number;
      experts?: any;
      vipRights: VipRights;
      vipType: number;
      userType: number;
      nickname: string;
      remarkName?: any;
      expertTags?: any;
  }

  export interface Decoration {
  }

  export interface HotComment {
      user: User;
      beReplied: any[];
      pendantData?: any;
      showFloorComment?: any;
      status: number;
      commentId: any;
      content: string;
      time: any;
      likedCount: number;
      expressionUrl?: any;
      commentLocationType: number;
      parentCommentId: number;
      decoration: Decoration;
      repliedMark?: any;
      liked: boolean;
  }

  export interface Associator2 {
      vipCode: number;
      rights: boolean;
  }

  export interface MusicPackage2 {
      vipCode: number;
      rights: boolean;
  }

  export interface VipRights2 {
      associator: Associator2;
      musicPackage: MusicPackage2;
      redVipAnnualCount: number;
  }

  export interface User2 {
      locationInfo?: any;
      liveInfo?: any;
      anonym: number;
      userId: number;
      avatarUrl: string;
      authStatus: number;
      experts?: any;
      vipRights: VipRights2;
      vipType: number;
      userType: number;
      nickname: string;
      remarkName?: any;
      expertTags?: any;
  }

  export interface User3 {
      locationInfo?: any;
      liveInfo?: any;
      anonym: number;
      userId: number;
      avatarUrl: string;
      authStatus: number;
      experts?: any;
      vipRights?: any;
      vipType: number;
      userType: number;
      nickname: string;
      remarkName?: any;
      expertTags?: any;
  }

  export interface BeReplied {
      user: User3;
      beRepliedCommentId: any;
      content: string;
      status: number;
      expressionUrl?: any;
  }

  export interface PendantData {
      id: number;
      imageUrl: string;
  }

  export interface Decoration2 {
  }

  export interface Comment {
      user: User2;
      beReplied: BeReplied[];
      pendantData: PendantData;
      showFloorComment?: any;
      status: number;
      commentId: any;
      content: string;
      time: any;
      likedCount: number;
      expressionUrl?: any;
      commentLocationType: number;
      parentCommentId: any;
      decoration: Decoration2;
      repliedMark?: any;
      liked: boolean;
  }

  export interface RootObject {
      isMusician: boolean;
      userId: number;
      topComments: any[];
      moreHot: boolean;
      hotComments: HotComment[];
      commentBanner?: any;
      code: number;
      comments: Comment[];
      total: number;
      more: boolean;
  }

}

declare module SongUrl {

  export interface Datum {
      id: number;
      url: string;
      br: number;
      size: number;
      md5: string;
      code: number;
      expi: number;
      type: string;
      gain: number;
      fee: number;
      uf?: any;
      payed: number;
      flag: number;
      canExtend: boolean;
      freeTrialInfo?: any;
      level: string;
      encodeType: string;
  }

  export interface RootObject {
      data: Datum[];
      code: number;
  }

}

