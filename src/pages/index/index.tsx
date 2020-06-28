import * as React from 'react';
import { useNativeEffect } from 'remax';
import { CMInput } from '../../components';
import { toplist } from '../../common/network';
import { View, Text, Image } from 'remax/one';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../store/redux/actions/test'

import styles from './index.css';

export default () => {
  const [ list, setList ] = React.useState<TopList['data']>();
  const state = useSelector<Test[], any>(state => state);
  const dispatch = useDispatch();
  console.log(state.test);

  useNativeEffect(() => {
    console.log('done');
    toplist().then((res) => {
      console.log(res);
      setList(res.data);
    });
    dispatch(addTodo('test'))
  }, []);

  const _toplist = list?.map(v => {
    return v.list.map(vv => {
      if (vv.tracks === null) return null;

      const tracks = vv.tracks?.slice(0, 3).map((track, index) => {
        return <Text key={track.first} style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
          {++index + '.' + track.first + ' ‐ ' + track.second}
        </Text>
      });

      return <View key={vv.id} style={{display: 'flex', padding: '7PX 0', height: '110PX'}}>
        <View style={{position: 'relative'}}>
          <Image src={vv.coverUrl} style={{width: '110PX', height: '110PX', borderRadius: '3PX'}}/>
          <Text style={{position: 'absolute', left: 0, bottom: 0, margin: '0 0 5px 10px', color: '#faf5f4DD', fontSize: '11PX'}}>
            {vv.updateFrequency}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flexGrow: 1, paddingLeft: '12PX', textAlign: 'left', overflow: 'hidden', color: '#747474'}}>
          {tracks}
        </View>
      </View>
    });
  });

  return (
    <View className={styles.app}>
      <View style={{margin: '10PX 0'}}>
        <CMInput/>
      </View>
      <View style={{fontSize: '14PX'}}>
        {_toplist}
      </View>
    </View>
  );
};