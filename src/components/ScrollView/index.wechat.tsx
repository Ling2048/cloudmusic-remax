import React from 'react'
import { ScrollView } from 'remax/wechat'

export default (props: { onScrollToLower?: () => void, style?: React.CSSProperties, children?: JSX.Element[] }) => {
  const { onScrollToLower, children, style } = props

  const handleScroll = ()=>{
    onScrollToLower && onScrollToLower()
  }

  return <ScrollView onScrollToLower={handleScroll} lowerThreshold={150} scrollY={true} style={style}>
    {children}
  </ScrollView>
}