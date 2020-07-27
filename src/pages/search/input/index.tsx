import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchInputValue, SearchShowType, getRecommendList, SearchKeyword } from '@/store/redux/actions'
import { suggest } from '@/common/network'
import { View, InputEvent, Input } from 'remax/one'
import { CMInput } from '@/components'
import { getCapsule, getCompatibleTop } from '@/common'
import { useHandleSearchItem } from '@/common/hooks'

import styles from '../index.css'

export default () => {
  const keyword = useSelector<Reducers, Actions['common']['SearchKeyword']['data']>(state => state.SearchKeyword)
  const dispatch = useDispatch()

  const handleInput = React.useCallback((value) => {
    // dispatch(SearchKeyword(value))
    // const value = e.target.value as string
    dispatch(SearchInputValue(value))
    dispatch(SearchShowType(1))
    suggest(value).then((res)=>{
      if (res.result !== undefined && res.result.allMatch !== undefined) {
        dispatch(getRecommendList(res.result.allMatch))
      }
    })
    if (value.length === 0) {
      dispatch(SearchShowType(0))
    }
    // return value
  }, [keyword])

  const handleConfirm = useHandleSearchItem()

  const handleDel = React.useCallback(()=>{
    dispatch(SearchKeyword(' '))
    dispatch(SearchKeyword(''))
    dispatch(SearchInputValue(''))
    dispatch(SearchShowType(0))
  }, [keyword])

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
      onInput={handleInput}
      value={keyword}
      onDel={handleDel}
      onConfirm={handleConfirm}
      />
  </View>
}