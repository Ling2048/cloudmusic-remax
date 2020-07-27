import * as React from 'react'
import { View, Image, navigateBack, reLaunch } from 'remax/one'
import { getCapsule, getCompatibleTop, getCompatibleWindowWidth } from '@/common'

import styles from './index.css'
import { leftArrow, home, home_black, leftArrow_black } from '@/common/icons'

export default React.memo((props: {
  name: string,
  hasLeftCapsule: boolean,
  theme?: string
}) => {
  const { name, hasLeftCapsule, theme } = props
  const memoStyle = React.useMemo<{ [key in string] :  React.CSSProperties }>(() => {
    const capsule = getCapsule()
    const capsuleHeight = capsule.height, capsuleRight = capsule.right, capsuleWidth = capsule.width
    const top = getCompatibleTop()
    const width = getCompatibleWindowWidth()
  
    return {
      capsule: {
        top: top + 'PX',
        height: capsuleHeight + 'PX',
        lineHeight: capsuleHeight + 'PX'
      },
      emptyCapsule: {
        width: capsuleWidth + width - capsuleRight + 'PX',
        height: capsuleHeight + 'PX'
      },
      title: {
        width: 2 * capsuleRight - 2 * capsuleWidth - width + 'PX',
        color: theme === 'white' ? '#ffffff' : '#000000',
      },
      capsuleClsExtend: {
        marginLeft: width - capsuleRight + 'PX',
        width: capsuleWidth+ 'PX',
        height: capsuleHeight + 'PX',
        backgroundColor: theme === 'white' ? 'rgba(0,0,0,0.2)' : 'unset'
      }
    }
  }, [theme])

  const handleNavBack = React.useCallback(() => navigateBack(), [])
  const handleRelaunch = React.useCallback(() => reLaunch({url: '/pages/index/index'}), [])

  let capsuleCls = `${styles.btn} ${styles.fBd} ${styles.fBdFull}`
  let lineCls = `${styles.line} ${styles.fBd} ${styles.fBdLeft}`

  let iconLeftArrow = leftArrow
  let iconHome = home

  // if (theme === 'white') {
  //   memoStyle.title.color = '#ffffff'
  //   memoStyle.capsuleClsExtend.backgroundColor = 'rgba(0,0,0,0.2)'
  // }
  if (theme !== 'white') {
    capsuleCls += ' ' + styles.fBdBlack
    lineCls += ' ' + styles.fBdBlack
    iconLeftArrow = leftArrow_black
    iconHome = home_black
  }

  return <View className={styles.mNavbar}>
    <View className={styles.navbarIcon} style={memoStyle.capsule}>
      {
        hasLeftCapsule ? <View className={capsuleCls} style={memoStyle.capsuleClsExtend}>
          <View className={`${styles.clickWrap} left`} onTap={handleNavBack}>
            <Image className={styles.icon} src={iconLeftArrow}/>
          </View>
          <View className={lineCls}/>
          <View className={`${styles.clickWrap} right`} onTap={handleRelaunch}>
            <Image className={styles.icon} src={iconHome}/>
          </View>
        </View> : 
        <View className={styles.emptyCapsule} style={memoStyle.emptyCapsule}/>
      }
      <View className={styles.title} style={memoStyle.title}>
        {name}
      </View>
      <View className={styles.emptyCapsule} style={memoStyle.emptyCapsule}/>
    </View>
  </View>
})