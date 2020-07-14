import * as React from 'react'
import { View, Button, Image, Text } from 'remax/one'

import styles from './Item.css'
import { getCount, parseRelativeDate } from '@/common';

const zan = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDZweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDYgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7otZ48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjM5NjIyMSI+CiAgICAgICAgPGcgaWQ9IuaSreaUvumhtV/liIbkuqvnirbmgIEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05ODYuMDAwMDAwLCAtMzE5NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4LjAwMDAwMCwgMzE5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnlKjmiLfkv6Hmga8iPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLotZ4r5pWw5YC8IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODguMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i6LWeIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wNjQ5MDIsIDMuNTA5OTM5KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjM3Nzk3MTQsMTQuNjM1NDAwOSBDMjcuMDU5ODI3MywxMy4zNTM2MDg5IDI3LjM3NTAzMDUsMTAuODg5ODI4MyAyNy4zNzUwMzA1LDcuODI0OTkzNTMgQzI3LjM3NTAzMDUsMC42NDU4MjMyNzEgMjMuNDQ4MjA3OSwtMC4wMDA1NjYxNTY1NzkgMjIuMDIwMDA1MiwzLjcxNTgyMTM4ZS0wNyBDMTcuNjE2MjI5NiwwLjAwMTc0NzIyNjUxIDE2LjgxNTgzMTQsNC4wMTA0NTQ4NiAxNi44MTU4MzE0LDcuODI0OTkzNTMgQzE2LjgxNTgzMTQsMTQuMjkwNzAxOCAxMi4zNTEyNzg4LDE2LjU4NjUyNzUgOC43ODU4MDAzOCwxNi42NTUwMzIxIEMwLjU0NDk3OTM3NywxNi42NTUwMzIxIDAsMTkuODA0ODc3OSAwLDI2Ljk1MDg0OCBMMCwzNi4xMDc1NDg5IEMwLDQwLjk4MDQ4NzYgNC44ODg0MzMzMiw0MC45NzU2MDk3IDQuODg4NDMzMzIsNDAuOTc1NjA5NyBMMjQuNjU2ODQ2Myw0MC45NzU2MDk3IEMzNy40NTkyNjQ3LDQwLjk3NTYwOTggMzkuNzA3MjcxNywzNi41NzE4MDIgNDEuNjY3OTIwMiwyNS4yNTg0OSBDNDMuNjI4NTY4NywxMy45NDUxNzgxIDM2LjM1NDc3NTksMTQuNjM1NDAwOSAzNC4yODM0MjE2LDE0LjYzNTQwMDkgTDI2LjM3Nzk3MTQsMTQuNjM1NDAwOSBaIiBpZD0i6LWeX3VwIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI4LjEyOTAzMjI2IiB5PSIxNi44NzcyNDkxIiB3aWR0aD0iMyIgaGVpZ2h0PSIyNC45NDE1NjAyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

export default (props: {
  data: SongComment.HotComment
}) => {
  const { data } = props

  return <View className={styles.commentItem}>
    <Button className={`btn-plain ${styles.avatar}`}>
      <Image className={styles.avatarImg} src={data.user.avatarUrl + '?imageView=1&thumbnail=40x0'}/>
      {/* <Text className={styles.avaIcon}/> */}
    </Button>
    <View className={styles.commentInfo}>
      <View className={styles.nickName}>
        {data.user.nickname}
      </View>
      <Text className={styles.time}>
        {parseRelativeDate(data.time, false)}
      </Text>
      <View className={styles.content}>
        <View>
          {/* <Image className={styles.cmtEmoji}/> */}
          <Text>
            {data.content}
          </Text>
        </View>
      </View>
      <View className={styles.zan}>
        <Button className={`btn-plain ${styles.zanBtn}`}>
          <Text className={styles.zanCount}>
            {getCount(data.likedCount)}
          </Text>
          <Image className={styles.zanImg} src={zan}/>
        </Button>
      </View>
    </View>
  </View>
}