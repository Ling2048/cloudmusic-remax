import * as React from 'react'
import { View, Text, Image, navigateTo } from 'remax/one'
import Item from './Item'

import styles from './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { playSimi } from '@/common/icons';
import { setCurId } from '@/store/redux/actions';

export default React.memo(() => {
  const songs = useSelector<Reducers, Actions['data']['getSimiSong']['data']>(state => state.getSimiSong)
  const dispatch = useDispatch()

  const handleOnItemTap = React.useCallback((id: number)=>{
    dispatch(setCurId({curId: id}))
  }, [])

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
    return <Item key={v.id} data={data} onTap={handleOnItemTap}/>
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
})