import * as React from 'react'
import { View, InputEvent } from 'remax/one'
import { CMInput } from '../../components'
import { SearchValue, SearchList } from './suggest'

import styles from './index.css';
import { useDispatch } from 'react-redux';

import { getRecommendList } from '../../store/redux/actions'
import { suggest } from '../../common/network'

export default () => {
  const [ inputValue, setInputValue ] = React.useState<string>('')
  const [ del, setDel ] = React.useState<boolean>(false)

  const dispatch = useDispatch();

  const handleInput = React.useCallback((e: InputEvent)=>{
    const value = e.target.value as string
    setInputValue(value)
    suggest(value).then((res)=>{
      if (res.result !== undefined && res.result.allMatch !== undefined) {
        dispatch(getRecommendList(res.result.allMatch))
      }
    })
    if (value.length > 0) setDel(true)
    else setDel(false)
  }, []);

  return <View className={styles.app}>
    <View className={styles.search}>
      <CMInput 
        focus={true}
        del={del}
        onInput={handleInput}
        value={inputValue}
        onDel={()=>{
          setDel(false)
          setInputValue('')
        }}/>
    </View>
    <View className={styles.container}>
      <View className={styles.suggest} style={{display: inputValue.length > 0 ? 'block' : 'none'}}>
        <SearchValue inputValue={inputValue}/>
        <SearchList/>
      </View>
    </View>
  </View>
}