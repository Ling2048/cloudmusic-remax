import * as React from 'react'
import { View, Image, InputEvent } from "remax/one"
import { Input } from 'remax/one'
import styles from './index.css'
import { searchIcon, deleteInputIcon } from '@/common/icons'
// import Input from '../Input'

type Props = {
  disabled?: boolean,
  focus: boolean,
  del?: boolean,
  value: string,
  onInput?: ((e: InputEvent) => any),
  onConfirm?: ((value: string) => any),
  onDel?: () => void
}

const onChange = (e: any) => {}

export default React.memo((props: Props = {
  focus: true,
  del: false,
  value: ''
}) => {
  const { focus, onInput, onDel, onConfirm } = props

  const [ del, setDel ] = React.useState<boolean>(false)
  const [ value, setValue ] = React.useState<string>(props.value)

  React.useEffect(()=>{
    setValue(props.value)
    if (props.value.length > 0) {
      setDel(true)
    }
  }, [props.value])

  const _onDel = React.useCallback(()=>{
    setDel(false)
    onDel && onDel()
  }, [onDel])

  const _onConfirm = React.useCallback((e: InputEvent) => {
    onConfirm && onConfirm(e.target.value)
  }, [onConfirm])

  const _onInput = React.useCallback((e: InputEvent)=>{
    var _value = e.target.value

    onInput && onInput(_value)

    if (process.env.REMAX_PLATFORM === 'web') {
      setValue(_value)
    }

    if (!del && _value.length > 0) {
      setDel(true)
    }

    if (_value.length == 0) {
      setDel(false)
    }

    // return _value
  }, [onInput])

  const deleteClass = React.useMemo(()=>{
    if (process.env.REMAX_PLATFORM === 'wechat') {
      return `${styles.deleteImg} ${styles.outerPadding}`
    }
    return `${styles.deleteImg} ${styles.outerMargin}`
  }, []);

  return <View className={styles.searchBox}>
    <Image className={styles.searchIcon} src={searchIcon}/>
    <Input
      // ref={inputRef as any}
      className={styles.searchInput}
      placeholder='搜索歌曲'
      placeholderStyle={{ color: '#a3a3a3' }}
      // disabled={disabled || false}
      focus={(focus ? 1 : 0) as any}
      onInput={_onInput}
      value={value}
      onConfirm={_onConfirm}
      web-onChange={onChange}
      type='text'
    />
    <Image 
      className={deleteClass} 
      style={{ visibility: del ? 'visible' : 'hidden' }} 
      src={deleteInputIcon}
      onTap={_onDel}
      />
  </View>
})