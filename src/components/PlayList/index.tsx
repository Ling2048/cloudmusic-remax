import * as React from 'react'
import { View, Image, navigateTo } from 'remax/one'
import Highlight from './Highlight'

import styles from './index.css'
import { playIconWhite, sq, cr, vip } from '@/common/icons'
import { StorageSync } from '@/common/api'

const isVip = (fee: number) => {
  return 0 < fee && (8 & fee) <= 0 && (fee || 16 & fee || 32 & fee)
}

const isExclusive = (flag: number) => {
  return 64 & flag;
}

const isHighQuility = (maxbr: number) => {
  return 4e5 <= maxbr;
}

const songPrivilege = (privilege: PlayListType[0]['privilege']) => {
  let t = privilege!, n = "", r = 0;
  return -300 === t.st ? (n = "版权方要求，该歌曲仅能通过网易云音乐APP播放", r = -2) : 4 === t.fee ? 0 === t.payed ? (n = "购买", 
  r = 2) : 0 < t.payed && 0 < (2048 & t.flag) && (n = "版权方要求，该歌曲须下载后播放", r = 4) : 0 < t.fee && 0 === t.pl ? (n = "会员", 
  r = 3) : 0 < t.fee && 8 !== t.fee && 32 !== t.fee && t.pl <= 0 ? (n = "唱片公司要求该歌曲须付费，打开网易云音乐购买后即可自由畅享", 
  r = 1) : t.pl <= 0 && (n = "由于版权保护，您所在的地区暂时无法使用", r = -1), {
      msg: n,
      modal: r
  };
}

const setPrivilegeList = (list: PlayListType) => {
  const songList = list.filter((t) => {
      return 0 === songPrivilege(t.privilege).modal;
  });
  StorageSync.setStorage('songList', JSON.stringify(songList))
}

const handleItemTap = (id: number, source: string, sourceid: number, list: PlayListType) => {
  setPrivilegeList(list)
  navigateTo({
    url: '/pages/song/index?id=' + id + '&source=' + source + '&sourceid=' + sourceid
  })
}

export default (props: {
  id: number,
  list?: PlayListType,
  noOrder?: boolean,
  highlights: string
}) => {
  const { id, list, noOrder, highlights } = props

  const layout = list?.map((v,i) => {
    const author = v.ar.map(v=>v.name).join('/')
    const name = v.al.name
    return <View key={v.id + v.name + i} className={styles.listItem} 
      style={noOrder ? {} : {paddingLeft: "104px", borderBottom: 0}} 
      onTap={handleItemTap.bind(null, v.id, 'list', id, list)}>
      {
        noOrder ? null : <View className={styles.order}>
          {i+1}
        </View>
      }
      <View className={styles.content}>
        <View className={styles.title}>
          <Highlight title={v.name} highlights={highlights}/>
        </View>
        <View className={styles.info}>
          {
            isVip(v.fee) ?  <Image className={styles.tagIcon} src={vip}/> : null
          }
          {
            isExclusive(v.privilege?.flag!) ? <Image className={styles.tagIcon} src={cr}/> : null
          }
          {
            isHighQuility(v.privilege?.maxbr!) ? <Image className={styles.tagIcon} src={sq}/> : null
          }
          <Highlight title={author} highlights={highlights}/>
          {` - `}
          <Highlight title={name} highlights={highlights}/>
        </View>
      </View>
      <Image className={styles.playIcon} src={playIconWhite}></Image>
    </View>
  })

  return <View className={styles.mPlayList} style={noOrder ? {} : {paddingLeft: 0}}>
    {layout}
  </View>
}