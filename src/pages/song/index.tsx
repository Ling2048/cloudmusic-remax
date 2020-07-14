import * as React from 'react'
import { View, Image } from 'remax/one'
import { useNativeEffect } from 'remax'
import { useDispatch, useSelector } from 'react-redux'

import MainView from './components/MainView'
import SimiSong from './components/SimiSong'
import Comment from './components/Comment'
import { songdetail, songlyrics, simisong, songcomment, songurl } from '@/common/network'
import { getSongDetail, getSongLyrics, getSimiSong, getSongComment, setPlayerStatus, setPlayerInfo } from '@/store/redux/actions'

import styles from './index.css'
import NavBar from '@/components/NavBar'
import { getCompatibleTop, getCapsule, getCompatibleWindowHeight } from '@/common'
import { play, pause } from '@/common/icons'

const PlayCtrl = () => {
  const player = useSelector<Reducers, Actions['player']['getPlayer']['data']>(state => state.player)
  const dispatch = useDispatch()
  const handlePlayAndPauseTap = React.useCallback((status: boolean)=>{
    dispatch(setPlayerStatus({playerStutes: status}))
  }, [])

  return <>
    {
      !player.playerStutes ? 
        <Image className={styles.playBtn} src={play} onTap={handlePlayAndPauseTap.bind(null, true)}/> :
        <Image className={styles.playBtn} src={pause} onTap={handlePlayAndPauseTap.bind(null, false)}/>
    }
  </>
}

const SongBG = React.memo(() => {
  const data = useSelector<Reducers, Actions['data']['getSongDetail']['data']>(state => state.getSongDetail)
  const pic = data ? 'https://music.163.com/api/img/blur/' + data[0]?.al.pic_str + '?param=90y90' : ''

  const memoStyle = React.useMemo<{
    [key in string]: React.CSSProperties
  }>(() => {
    const height = getCompatibleWindowHeight()
    return {
      current: {
        width: height + "PX",
        height: height + "PX",
        left: "-" + .5 * height / 2 + "PX"
      },
      next: {
        width: height + "PX",
        height: height + "PX",
        left: "-" + .5 * height / 2 + "PX"
      }
    }
  }, [])

  return <View className={styles.songBg}>
    {
      data ? <>
      <Image className={`${styles.songBgImg} ${styles.current}`} style={memoStyle.current} src={pic}/>
      <Image className={`${styles.songBgImg} ${styles.next}`} style={memoStyle.next} src={pic}/>
      </> : null
    }
  </View>
})

export default (props: RouteProps<{id: number, source: string, sourceid: number}>) => {
  const id = props.location?.query.id!

  const dispatch = useDispatch()
  useNativeEffect(()=>{
    songdetail(id).then(res => {
      const data = res.data
      dispatch(getSongDetail(data))
      songlyrics(id).then(res => {
        dispatch(getSongLyrics(res.lrc))
      })
      simisong(id).then(res => {
        dispatch(getSimiSong(res.songs))
      })
      songcomment({resourceId: id, resourceType: 4}).then(res => {
        dispatch(getSongComment(res.hotComments))
      })
      songurl({ids: [id]}).then(res=>{
        const firstData = data[0]
        dispatch(setPlayerInfo({
          songInfo: {
            id: id,
            title: firstData.name,
            epname: firstData.al.name,
            singer: firstData.ar[0].name,
            coverImgUrl: firstData.al.picUrl
          },
          src: res.data[0].url
        }))
      })
    })
  }, [id])

  const memoStyle = React.useMemo<{
    [key in string]: React.CSSProperties
  }>(() => {
    const top = getCompatibleTop()
    const capsule = getCapsule()
    const height = getCompatibleWindowHeight()
    return {
     empty: {
      height: top + capsule.height + 15 + 'PX'
     },
     scroll: {
       height: height + top + capsule.height + 15 + 'PX'
     }
    }
  }, [id])

  return <View>
    <View className={styles.newsong}>
      <SongBG/>
      <View className={styles.songMask}/>
      <NavBar name='播放' hasLeftCapsule={true} theme='white'/>
      <View className='empty' style={memoStyle.empty}/>
      <View className={styles.scrollView} style={memoStyle.scroll}>
        <PlayCtrl/>
        <View className='content-wrap'>
          <MainView/>
          <SimiSong/>
          <Comment/>
          <View className={styles.emptyBox}/>
        </View>
      </View>
    </View>
  </View>
}