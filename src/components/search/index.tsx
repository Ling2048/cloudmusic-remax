import * as React from 'react';
import { View, Image, Input } from "remax/one";
import search from '../../images/search.svg';
import styles from './index.css';

export default () => {
    return <View className={styles.container}>
        <Image className={styles.icon} src={search}></Image>
        <Input 
            className={styles.input}
            placeholder='搜索歌曲' 
            placeholderStyle={{color: '#a3a3a3'}}
            disabled={true}
        />
    </View>
}