import * as React from 'react'
import { View } from 'remax/one'

import styles from './index.css'

export default React.memo(() => {
  return <View className={styles.spin}/>
})