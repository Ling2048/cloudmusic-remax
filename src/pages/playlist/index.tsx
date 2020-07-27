import React, { useState, useEffect, useReducer } from 'react'
import { View, Image, Text, Button } from 'remax/one'
import { playlistdetail } from '@/common/network'
import PlayList from '@/components/PlayList'
import Header from './components/Header'
import NavBar from '@/components/NavBar'
import { getCapsule, getCompatibleTop, getCompatibleWindowHeight, mergeSongBytrack } from '@/common'
import PlayListSkeleton from '@/skeleton/playlist'
import { share, playIconAll } from '@/common/icons'
import ScrollView from '@/components/ScrollView'

import './index.css'

declare global {
  type PlayListType = (PlayListDetail['playlist']['tracks'][0] & {
    privilege?: PlayListDetail['privileges'][0]
  })[]
}

const pageCount = 20

type State = {
  list: PlayListType,
  index: number,
  playlist?: PlayListType,// PlayListDetail['playlist'],
  loading: boolean,
  info: PlayListHeadProp
}
type Action = Partial<State>
const InitState: State = {
  list: [],
  index: 1,
  playlist: undefined,
  loading: true,
  info: {
    coverImgUrl: '',
    coverImgId_str: 0,
    playCount: 0,
    name: '',
    description: '',
    creator: {
      avatarUrl: '',
      nickname: ''
    }
  }
}

const Reducer: React.Reducer<State, Action> = (state, action) => {
  return {
    ...state,
    ...action
  }
}

export default (props: RouteProps<{id: number}>) => {
  const id = props.location?.query.id!
  const [ state, dispatch ] = useReducer<React.Reducer<State, Action>, State>(Reducer, InitState, (a) => a)

  useEffect(()=>{
    playlistdetail({
      id: id,
      shareUserId: 0
    }).then((res)=>{
      const _list = mergeSongBytrack(res.playlist.tracks, res.privileges, 0, res.playlist.tracks.length)
      dispatch({
        playlist: _list, list: _list.slice(0, pageCount), loading: false,
        info: {
          coverImgUrl: res.playlist.coverImgUrl,
          coverImgId_str: res.playlist.coverImgId_str,
          playCount: res.playlist.playCount,
          name: res.playlist.name,
          description: res.playlist.description,
          creator: res.playlist.creator
        }
      })
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

  const handleOnScrollToLower = React.useCallback(()=>{
    const { index, list, playlist, loading } = state
    if (!loading && playlist && (index * pageCount + pageCount) <= playlist.length) {
      const _list = playlist.slice(index * pageCount, index * pageCount + pageCount)
      list.push(..._list)
      dispatch({
        list: list,
        index: index + 1
      })
    }
  }, [state])

  return <View>
    <NavBar name='歌单' hasLeftCapsule={true} theme='white'/>
    {
      !state.playlist ? <PlayListSkeleton/> :
      <View>
        <View className='playlist-bg'>
          <Image className='playlist-bg-img' src={"https://music.163.com/api/img/blur/" + state?.info.coverImgId_str + "?param=40y40"}/>
          <View className='playlist-bg-mask'/>
        </View>
        <View style={memoStyle.top}/>
        <ScrollView onScrollToLower={handleOnScrollToLower} style={memoStyle.scroll}>
          <View className='header-wrap'>
            {
              state?.playlist ? <Header playlistInfo={state.info}/> : null
            }
          </View>
          {/* <View className='btn-list'>
            <Button className='btn'>
              <Image className='btn-icon' src={share}/>
              <Text className='btn-msg'>分享给微信好友</Text>
            </Button>
          </View> */}
          <View className='playlist-wrap'>
            <View>
              <View className='list-item'>
                <Image className='play-icon' src={playIconAll}/>
                <Text className='title'>播放全部</Text>
                <Text className='info'>
                  (共{state?.playlist?.length}首)
                </Text>
              </View>
              <PlayList list={state.list} id={id} highlights=''/>
            </View>
          </View>
        </ScrollView>
      </View>
    }
  </View>
}