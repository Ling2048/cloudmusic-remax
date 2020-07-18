import React, { useState, useEffect } from 'react'
import { View, Image, Text, Button } from 'remax/one'
import { playlistdetail } from '@/common/network'
import PlayList from '@/components/PlayList'
import Header from './components/Header'
import NavBar from '@/components/NavBar'
import { getCapsule, getCompatibleTop, getCompatibleWindowHeight, mergeSongBytrack } from '@/common'
import PlayListSkeleton from '@/skeleton/playlist'
import { usePageEvent } from 'remax/macro'

import './index.css'
import { share, playIconAll } from '@/common/icons'

declare global {
  type PlayListType = (PlayListDetail['playlist']['tracks'][0] & {
    privilege?: PlayListDetail['privileges'][0]
  })[]
}



export default (props: RouteProps<{id: number}>) => {
  const id = props.location?.query.id!

  const [ state, setState ] = useState<{
    playlist: PlayListDetail['playlist'],
    list: PlayListType,
    loaded: boolean
  }>()

  useEffect(()=>{
    playlistdetail({
      id: id,
      shareUserId: 0
    }).then((res)=>{
      const list1 = mergeSongBytrack(res.playlist.tracks, res.privileges, 0, 15)
      setState({playlist: res.playlist, list: list1, loaded: true})
    });
  }, [id])

  const memoStyle = React.useMemo<{
    [key in string]: React.CSSProperties
  }>(() => {
    const capsuleHeight = getCapsule().height
    const top = getCompatibleTop()
    const height = getCompatibleWindowHeight()

    return {
      top: {
        height: top + capsuleHeight + 15 + 'PX'
      },
      scroll: {
        height: height - (top + capsuleHeight + 15) + 'PX',
        overflow: 'scroll'
      }
    }
  }, [id])

  return <View>
    <NavBar name='歌单' hasLeftCapsule={true} theme='white'/>
    {
      !state ? <PlayListSkeleton/> :
      <View>
        <View className='playlist-bg'>
          <Image className='playlist-bg-img' src={"https://music.163.com/api/img/blur/" + state?.playlist?.coverImgId_str + "?param=40y40"}/>
          <View className='playlist-bg-mask'/>
        </View>
        <View style={memoStyle.top}/>
        <View style={memoStyle.scroll}>
          <View className='header-wrap'>
            {
              state?.playlist ? <Header playlistInfo={state.playlist!}/> : null
            }
          </View>
          <View className='btn-list'>
            <Button className='btn'>
              <Image className='btn-icon' src={share}/>
              <Text className='btn-msg'>分享给微信好友</Text>
            </Button>
          </View>
          <View className='playlist-wrap'>
            <View>
              <View className='list-item'>
                <Image className='play-icon' src={playIconAll}/>
                <Text className='title'>播放全部</Text>
                <Text className='info'>
                  (共{state?.playlist?.tracks.length}首)
                </Text>
              </View>
              <PlayList list={state?.list} id={id}/>
            </View>
          </View>
        </View>
      </View>
    }
  </View>
}