import * as React from 'react';
import { View, Image, Input } from "remax/one";
import search from '../../images/search.svg';

export default () => {
    return <View style={{backgroundColor: '#f7f7f7', borderRadius: '20PX', display: 'flex', alignItems: 'center', padding: '10PX 12PX'}}>
        <Image style={{height: '20PX', width: '20PX', marginRight: '8PX'}} src={search}></Image>
        <Input 
            style={{border: 'none', backgroundColor: 'transparent', fontSize: '15PX', flexGrow: 1, textAlign: 'left'}} 
            placeholder='搜索歌曲' 
            placeholderStyle={{color: '#a3a3a3'}}
            disabled={true}
        />
    </View>
}