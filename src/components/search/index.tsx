import * as React from 'react'
import { View, Image, Input, InputEvent } from "remax/one"
import search from '../../images/search.svg'
import close from '../../images/close.svg'
import styles from './index.css'

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

  return <View className={styles.container}>
    <Image className={`${styles.icon} ${styles.marginRight}`} src={search}/>
    <Input
      className={styles.input}
      placeholder='搜索歌曲'
      placeholderStyle={{ color: '#a3a3a3' }}
      disabled={disabled || false}
      focus={focus || false}
      onInput={onInput}
      value={value}
    />
    <Image 
      className={`${styles.icon} ${styles.marginLeft}`} 
      style={{visibility: del ? 'visible' : 'hidden' }} 
      src={close}
      onTap={onDel}/>
  </View>
}