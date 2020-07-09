import React, { useState } from 'react'
import { View, Image, Text, Button } from 'remax/one'
import { useDispatch } from 'react-redux'
import { useNativeEffect } from 'remax'
import { playlistdetail } from '@/common/network'
import PlayList from '@/components/PlayList'
import Header from './components/Header'

import './index.css'

const share = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7mrYzljZXor6bmg4XliIbkuqtAMnggPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0i5q2M5Y2V6K+m5oOFX+WIhuS6q+eKtuaAgSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNi4wMDAwMDAsIC03NzAuMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDguMDAwMDAwLCA3MzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3LjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IuatjOWNleivpuaDheWIhuS6q0AyeC0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuNjg3NSwzLjUgQzEwLjg0OTkyNzksMy41IDIuODc1LDExLjQ3NDkyNzkgMi44NzUsMjEuMzEyNSBDMi44NzUsMzEuMTUwMDcyMSAxMC44NDk5Mjc5LDM5LjEyNSAyMC42ODc1LDM5LjEyNSBMMjAuNjg3NSwzOS4xMjUgQzMwLjUyNTA3MjEsMzkuMTI1IDM4LjUsMzEuMTUwMDcyMSAzOC41LDIxLjMxMjUiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC03IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjI4LjUgMi44NzUgMzkuMTI1IDIuODc1IDM5LjEyNSAxMy41Ij48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuODEyNSwxOC42NTYyNSBMMzguODEyNSwzLjE4NzUiIGlkPSJQYXRoLTExIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const subscribe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAxMDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmrYzljZXor6bmg4Vf5YiG5Lqr54q25oCBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjgxLjAwMDAwMCwgLTc3MS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTktQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTU1LjAwMDAwMCwgNzM4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuMDAwMDAwLCAzMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksMTkgTDE5LDUgQzE5LDMuODk1NDMwNSAxOS44OTU0MzA1LDMgMjEsMyBDMjIuMTA0NTY5NSwzIDIzLDMuODk1NDMwNSAyMyw1IEwyMywxOSBMMzcsMTkgQzM4LjEwNDU2OTUsMTkgMzksMTkuODk1NDMwNSAzOSwyMSBDMzksMjIuMTA0NTY5NSAzOC4xMDQ1Njk1LDIzIDM3LDIzIEwyMywyMyBMMjMsMzcgQzIzLDM4LjEwNDU2OTUgMjIuMTA0NTY5NSwzOSAyMSwzOSBDMTkuODk1NDMwNSwzOSAxOSwzOC4xMDQ1Njk1IDE5LDM3IEwxOSwyMyBMNSwyMyBDMy44OTU0MzA1LDIzIDMsMjIuMTA0NTY5NSAzLDIxIEMzLDE5Ljg5NTQzMDUgMy44OTU0MzA1LDE5IDUsMTkgTDE5LDE5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
const playIconAll = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5wbGF5aWNvbl81NHB4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjgiPgogICAgICAgIDxnIGlkPSLmrYzljZXor6bmg4Vf5peg5oyJ6ZKuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNzgzLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDczOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLmkq3mlL7lhajpg6giPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4LjAwMDAwMCwgNDUuMDAwMDAwKSIgaWQ9InBsYXlpY29uXzU0cHgiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAsMCBDNDYuNTY4ODg4OSwwIDYwLDEzLjQzMTExMTEgNjAsMzAgQzYwLDQ2LjU2ODg4ODkgNDYuNTY4ODg4OSw2MCAzMCw2MCBDMTMuNDMxMTExMSw2MCAwLDQ2LjU2ODg4ODkgMCwzMCBDMCwxMy40MzExMTExIDEzLjQzMTExMTEsMCAzMCwwIFogTTMwLDQgQzE1LjY0MDQxNjcsNCA0LDE1LjY0MDQxNjcgNCwzMCBDNCw0NC4zNTk1ODMzIDE1LjY0MDQxNjcsNTYgMzAsNTYgQzQ0LjM1OTU4MzMsNTYgNTYsNDQuMzU5NTgzMyA1NiwzMCBDNTYsMTUuNjQwNDE2NyA0NC4zNTk1ODMzLDQgMzAsNCBaIE0yMy4wMDA5NTA5LDIwLjk2MDUzODQgQzIzLjAxMzk0NjMsMjAuNjExODI4NSAyMy4yMDQ1NDU1LDE4LjEwMjI3MjcgMjYsMTkuNSBMMjYsMTkuNSBMMzkuNSwyOC41IEMzOS41LDI4LjUgNDIuNSwzMCAzOS41LDMxLjUgTDM5LjUsMzEuNSBMMjYsNDAuNSBDMjYsNDAuNSAyMyw0MiAyMywzOSBMMjMsMzkgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";

declare global {
  type PlayListType = (PlayListDetail['playlist']['tracks'][0] & {
    privilege?: PlayListDetail['privileges'][0]
  })[]
}

const B = (track: PlayListType[0]) => {
  return {
    name: track.name,
    id: track.id,
    privilege: track.privilege,
    fee: track.fee,
    ar: track.ar,
    al: track.al
  }
}

const mergeSongBytrack = (tracks: PlayListType, privileges: any, index: number, len: number) => {
  for (var i = [], a = index; a < len; a++) {
    tracks[a].privilege = privileges[a]
    i.push(B(tracks[a]))
  }
  return i;
}

export default (props: RouteProps<{id: number}>) => {
  const [ playList, setPlayList ] = useState<PlayListDetail['playlist']>()
  const [ list, setList ] = useState<PlayListType>()
  const id = props.location?.query.id!

  useNativeEffect(()=>{
    playlistdetail({
      id: id,
      shareUserId: 0
    }).then((res)=>{
      console.log(res.playlist)
      setPlayList(res.playlist)
      const list = mergeSongBytrack(res.playlist.tracks, res.privileges, 0, 15)
      setList(list)
    });
  }, [id])

  return <View>
    <View className='playlist-bg'>
      <Image className='playlist-bg-img' src={"https://music.163.com/api/img/blur/" + playList?.coverImgId_str + "?param=40y40"}/>
      <View className='playlist-bg-mask'/>
    </View>
    <View>
      <View className='header-wrap'>
        <Header playlistInfo={playList!}/>
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
              (共{playList?.tracks.length}首)
            </Text>
          </View>
          <PlayList list={list} id={id}/>
        </View>
        {/* <View className='no-song'>暂无播放</View> */}
      </View>
    </View>
  </View>
}