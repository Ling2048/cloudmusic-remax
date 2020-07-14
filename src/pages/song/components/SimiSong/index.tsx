import * as React from 'react'
import { View, Text, Image } from 'remax/one'
import Item from './Item'

import styles from './index.css'
import { useSelector } from 'react-redux';

const playSimi = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAxMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmkq3mlL7pobVf5LiL6L29YXBw5oyJ6ZKuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODE2LjAwMDAwMCwgLTIxMTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE1LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4Ni4wMDAwMDAsIDIwOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjAwMDAwMCwgMTguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDAgQzI3Ljk0MTEyNTUsMCAzNiw4LjA1ODg3NDUgMzYsMTggQzM2LDI3Ljk0MTEyNTUgMjcuOTQxMTI1NSwzNiAxOCwzNiBDOC4wNTg4NzQ1LDM2IDAsMjcuOTQxMTI1NSAwLDE4IEMwLDguMDU4ODc0NSA4LjA1ODg3NDUsMCAxOCwwIFogTTE4LDMgQzkuNzE1NzI4NzUsMyAzLDkuNzE1NzI4NzUgMywxOCBDMywyNi4yODQyNzEyIDkuNzE1NzI4NzUsMzMgMTgsMzMgQzI2LjI4NDI3MTIsMzMgMzMsMjYuMjg0MjcxMiAzMywxOCBDMzMsOS43MTU3Mjg3NSAyNi4yODQyNzEyLDMgMTgsMyBaIE0xNi40MzYyNTgxLDEyLjI1MjM1MTQgTDIzLjMwMDcxNzgsMTYuNzU1MjgzMSBDMjQuMjAzNzIzNCwxNy4zNDc2MzQ1IDI0LjIwMzcyMzQsMTguNjcxMzg4OCAyMy4zMDA3MTc4LDE5LjI2Mzc0MDMgTDE2LjQzNjI1ODEsMjMuNzY2NjcyIEMxNS40Mzg3MzE1LDI0LjQyMTAyNzEgMTQuMTEzNTEyMywyMy43MDU0Mzk1IDE0LjExMzUxMjMsMjIuNTEyNDQzNCBMMTQuMTEzNTEyMywxMy41MDY1Nzk5IEMxNC4xMTM1MTIzLDEyLjMxMzU4MzggMTUuNDM4NzMxNSwxMS41OTc5OTYzIDE2LjQzNjI1ODEsMTIuMjUyMzUxNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";

export default () => {
  const songs = useSelector<Reducers, Actions['data']['getSimiSong']['data']>(state => state.getSimiSong)
  const items = songs.map(v => {
    const album = v.album
    const singerName = v.artists.map(a => a.name).join(' / ')
    const data = {
      id: v.id,
      songName: v.name,
      singerName: singerName,
      albumName: album.name,
      isSQ: 4e5 <= v.privilege.maxbr,
      pic: album.picUrl + '?imageView=1&thumbnail=120x0',
      privilege: v.privilege
    }
    return <Item key={v.id} data={data}/>
  })

  return <View className={styles.simiSong}>
    <View className={styles.simiHeader}>
      <Text className={styles.title}>喜欢这首歌的人也听</Text>
      <View className={styles.playAllRecommend}>
        <Image className={styles.playSimi} src={playSimi}/>
        <Text className='btn-txt'>一键收听</Text>
      </View>
    </View>
    <View>
        {items}
    </View>
  </View>
}