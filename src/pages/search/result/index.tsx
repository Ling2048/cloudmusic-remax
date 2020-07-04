import * as React from 'react'
import { useSelector } from 'react-redux'
import { View, Image } from 'remax/one'
import playIcon from '../../../images/play.svg'

import styles from "../index.css"

const SearchResult = () => {
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)
  const data = useSelector<Reducers, Actions['data']['getSearchList']['data'] | null>(state => state.getSearchList)

  const list = data?.songs.map((v,i) => {
    return <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid gray'}}>
      <View style={{width: '88%'}}>
        <View className='content'>
          {v.name}
        </View>
        <View className='info' style={{fontSize: '22px'}}>
          {v.ar[0]?.name + ' ‐ ' + v.al?.name}
        </View>
      </View>
      <Image src={playIcon}/>
    </View>
  })

  return <View className={styles.wrap} style={{display: showType === 2 ? 'block' : 'none'}}>
    {list}
  </View>
}

export default SearchResult