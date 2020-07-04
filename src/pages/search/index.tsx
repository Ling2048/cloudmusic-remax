import * as React from 'react'
import { View } from 'remax/one'
import { useNativeEffect } from 'remax'
import { useDispatch } from 'react-redux'

import Suggest from './suggest'
import Default from './default'
import Input from './input'
import SearchResult from './result'

import { getHotSearchList } from '../../store/redux/actions'
import { hotsearchlist } from '../../common/network'

import styles from './index.css';

export default () => {
  const dispatch = useDispatch()

  useNativeEffect(()=>{
    hotsearchlist().then((res)=>{
      console.log(res);
      dispatch(getHotSearchList(res.data))
    });
  }, [])

  return <View className={styles.app}>
    <Input/>
    <View className={styles.page}>
      <Default/>
      <Suggest/>
      <SearchResult/>
    </View>
  </View>
}