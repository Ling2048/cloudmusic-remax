import * as React from 'react'
import { View, Text } from 'remax/one'

import './Highlight.css'

export default (props: {title: string}) => {
  const { title } = props

  return <View className='item'>
    <Text className='normal'>
      {title}
    </Text>
  </View>
}