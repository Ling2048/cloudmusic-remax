import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchInputValue, SearchShowType, getRecommendList } from '@/store/redux/actions'
import { suggest } from '@/common/network'
import { View, InputEvent } from 'remax/one'
import { CMInput } from '@/components'

import styles from '../index.css'
import { getCapsule, getCompatibleTop } from '@/common'

export default React.memo(() => {
  const [ del, setDel ] = React.useState<boolean>(false)
  const inputValue = useSelector<Reducers, string>(state => state.SearchInputValue)

  const dispatch = useDispatch()

  const handleInput = React.useCallback((e: InputEvent) => {
    const value = e.target.value as string
    dispatch(SearchInputValue(value))
    dispatch(SearchShowType(1))
    suggest(value).then((res)=>{
      if (res.result !== undefined && res.result.allMatch !== undefined) {
        dispatch(getRecommendList(res.result.allMatch))
      }
    })
    if (value.length > 0) setDel(true)
    else {
      setDel(false)
      dispatch(SearchShowType(0))
    }
  }, [])

  const handleDel = React.useCallback(()=>{
    setDel(false)
    dispatch(SearchInputValue(''))
    dispatch(SearchShowType(0))
  }, [])

  const memoStyle = React.useMemo<{
    [key in string]: React.CSSProperties
  }>(() => {
    const capsule = getCapsule()
    const top = getCompatibleTop()
    return {
      searchWrap: {
        paddingTop: top + capsule.height + 15 + 'PX'
      }
    }
  }, [])

  return <View className={styles.searchWrap} style={memoStyle.searchWrap}>
    <CMInput 
      focus={true}
      del={del}
      onInput={handleInput}
      value={inputValue}
      onDel={handleDel}/>
  </View>
})