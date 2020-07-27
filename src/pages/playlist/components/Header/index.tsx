import * as React from 'react'
import { View, Image, Text } from 'remax/one'

import './index.css'
import { getCount } from '@/common';
import { playCounts, arrow } from '@/common/icons';

declare global {
  type PlayListHeadProp = {
    coverImgId_str: number,
    coverImgUrl: string,
    playCount: number,
    name: string,
    description: string,
    creator: {
      avatarUrl: string,
      nickname: string
    }
  }
}

export default React.memo((props: {playlistInfo?: PlayListHeadProp}) => {
  const { playlistInfo } = props

  return <View className='header'>
    <View className='intro'>
      <View className='intro-cover'>
        <Image className='intro-img' src={playlistInfo?.coverImgUrl}/>
        <View className='play_counts'>
          <Image className='counts_icon' src={playCounts}/>
          <Text>
            {getCount(playlistInfo?.playCount ? playlistInfo?.playCount : 0)}
          </Text>
        </View>
      </View>
      <View className='intro-content'>
        <View className='content-title'>
          {playlistInfo?.name}
        </View>
        <View className='content-avatar'>
          <Image className='avatar-img' src={playlistInfo?.creator?.avatarUrl}/>
          {playlistInfo?.creator?.nickname}
        </View>
        <View className='content-description'>
          <View className='context'>
            {playlistInfo?.description}
            <Image className='arrow' src={arrow}/>
          </View>
        </View>
      </View>
    </View>
  </View>
})