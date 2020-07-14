import * as React from 'react'
import { useNativeEffect } from 'remax'
import { CMInput } from '../../components'
import { toplist } from '../../common/network'
import { View, Text, Image, navigateTo } from 'remax/one'
import { useSelector, useDispatch } from 'react-redux'
import { getTopList } from '../../store/redux/actions'
import NavBar from '@/components/NavBar'

import styles from './index.css'

const TopList = () => {
  const state = useSelector<Reducers, Actions['data']['getTopList']['data']>(state => state.getTopList);

  const handleItemTap = React.useCallback((id: number)=>{
    navigateTo({
      url: '/pages/playlist/index?id=' + id
    })
  }, [])

  const _toplist = state.map(v => {
    return v.list.map(vv => {
      if (vv.tracks === null) return null;

      const tracks = vv.tracks.slice(0, 3).map((track, index) => {
        return <Text key={track.first} style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {++index + '.' + track.first + ' ‐ ' + track.second}
        </Text>
      });

      return <View key={vv.id} style={{ display: 'flex', padding: '7PX 0', height: '110PX' }} onTap={handleItemTap.bind(null, vv.id)}>
        <View style={{ position: 'relative' }}>
          <Image src={vv.coverUrl} style={{ width: '110PX', height: '110PX', borderRadius: '3PX' }} />
          <Text style={{ position: 'absolute', left: 0, bottom: 0, margin: '0 0 5px 10px', color: '#faf5f4DD', fontSize: '11PX' }}>
            {vv.updateFrequency}
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flexGrow: 1, paddingLeft: '12PX', textAlign: 'left', overflow: 'hidden', color: '#747474' }}>
          {tracks}
        </View>
      </View>
    });
  });

  return <View style={{ fontSize: '14PX' }}>
    {_toplist}
  </View>
}

export default () => {
  const dispatch = useDispatch();

  const handleTap = React.useCallback(()=>{
    navigateTo({
      url: '/pages/search/index'
    })
  }, []);

  useNativeEffect(() => {
    toplist().then((res) => {
      dispatch(getTopList(res.data));
    });
  }, []);

  return (
    <View>
      <View className='app'>
        <View className={styles.empty}/>
        <View onTap={handleTap} style={{ margin: '12px 0' }}>
          <CMInput disabled={true}/>
        </View>
        <TopList/>
      </View>
    </View>
  );
};