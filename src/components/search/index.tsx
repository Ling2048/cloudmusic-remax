import * as React from 'react'
import { View, Image, Input, InputEvent } from "remax/one"
import styles from './index.css'
import { searchIcon, deleteInputIcon } from '@/common/icons'

type Props = {
  disabled?: boolean,
  focus?: boolean,
  del?: boolean,
  value?: string,
  onInput?: ((e: InputEvent) => any) | undefined,
  onDel?: () => void
}

export default (props: Props) => {
  const { disabled, focus, del, value, onInput, onDel } = props

  return <View className={styles.searchBox}>
    <Image className={styles.searchIcon} src={searchIcon}/>
    <Input
      className={styles.searchInput}
      placeholder='搜索歌曲'
      placeholderStyle={{ color: '#a3a3a3' }}
      disabled={disabled || false}
      focus={focus || false}
      onInput={onInput}
      // value={value}
    />
    <Image 
      className={styles.deleteImg} 
      style={{visibility: del ? 'visible' : 'hidden' }} 
      src={deleteInputIcon}
      onTap={onDel}/>
  </View>
}