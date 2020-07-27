import * as React from 'react'
import { View, Text } from 'remax/one'

import styles from  './Highlight.css'

export default (props: {title: string, highlights: string}) => {
  const { title, highlights } = props
  let highlightItem: JSX.Element[] | null = null
  let match: RegExpMatchArray | null = null

  if (highlights.length > 0) {
    const reg = React.useMemo(() => new RegExp('' + highlights, 'ig'), [highlights])
    match = title.match(reg)
    if (match && match.length) {
      highlightItem = title.split(reg).map((v, i) => {
        return <View key={i} className={styles.item}>
          {
            v ? <Text>{v}</Text> : null
          }
          <Text className={styles.hightlight}>{match![i]}</Text>
        </View>
      })
    }
  }

  return <View className={styles.item}>
    {
      highlights.length > 0 && match && match.length ? <>{highlightItem}</> : <Text className='normal'>
        {title}
      </Text>
    }
  </View>
}