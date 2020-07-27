import * as React from 'react'
import { View, Image } from 'remax/one'
import { useDispatch, useSelector } from 'react-redux'

import MainView from './components/MainView'
import SimiSong from './components/SimiSong'
import Comment from './components/Comment'
import { songdetail, songlyrics, simisong, songcomment, songurl } from '@/common/network'
import { getSongDetail, getSongLyrics, getSimiSong, getSongComment, setPlayerStatus, setPlayerInfo, setCurId } from '@/store/redux/actions'

import styles from './index.css'
import NavBar from '@/components/NavBar'
import { getCompatibleTop, getCapsule, getCompatibleWindowHeight } from '@/common'
import { play, pause } from '@/common/icons'

const PlayCtrl = React.memo(() => {
  const player = useSelector<Reducers, Actions['player']['getPlayer']['data']>(state => state.player!)
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
})

const SongBG = React.memo(() => {
  const data = useSelector<Reducers, Actions['data']['getSongDetail']['data']>(state => state.getSongDetail)
  const pic = data ? 'https://music.163.com/api/img/blur/' + (data[0]?.al.pic_str || data[0]?.al.pic) + '?param=90y90' : ''

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

const NavBarEx = React.memo(() => {
  const data = useSelector<Reducers, Actions['data']['getSongDetail']['data']>(state => state.getSongDetail)
  const name = data.length > 0 ? data[0]?.name : ''

  return <View>
    <NavBar name={name} hasLeftCapsule={true} theme='white'/>
  </View>
})

export default React.memo((props: RouteProps<{id: string, source: string, sourceid: string}>) => {
  const queryId = Number(props.location?.query.id!)
  const curId = useSelector<Reducers, number | undefined>(state => state.player.curId)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    if (curId !== queryId) dispatch(setCurId({curId: queryId}))
  }, [queryId])

  React.useEffect(()=>{
    if (!curId) return
    const id = curId// ? curId : queryId
    
    songdetail(id).then(res => {
      const data = res.data
      dispatch(getSongDetail(data))
      songlyrics(id).then(res => {
        dispatch(getSongLyrics(res))
      })
      simisong(id).then(res => {
        dispatch(getSimiSong(res.songs))
      })
      songcomment({resourceId: id, resourceType: 4}).then(res => {
        dispatch(getSongComment(res.hotComments))
      })
      songurl({ids: [id]}).then(res=>{
        if (res.data[0].url !== null) {
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
        }
      })
    })
  }, [curId])

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
       height: height - (top + capsule.height + 15) + 'PX'
     }
    }
  }, [])

  return <View>
    <View className={styles.newsong}>
      <SongBG/>
      <View className={styles.songMask}/>
      <NavBarEx/>
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
})