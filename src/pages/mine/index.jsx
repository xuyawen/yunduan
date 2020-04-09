import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const navList = [
  {
    id: 1,
    text: '我的电台',
    icon: 'icon iconfont icon-diantai'
  },
  {
    id: 2,
    text: '我的收藏',
    icon: 'icon iconfont icon-shoucang'
  },
]
const quickList = [
  {
    id: 1,
    text: '我喜欢的音乐',
    desc: ''
  },
  {
    id: 2,
    text: '私人FM',
    desc: '你的私人曲库'
  },
  {
    id: 3,
    text: 'Sita空间',
    desc: '减压轻音乐'
  },
]
export default class Mine extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '我的'
  }

  render() {
    return (
      <View className='mine'>
        {/* 用户信息 */}
        <View className='mine-detail'>
          <View className='mine-info clearfix'>
            <View className='mine-head fl'>
              <Image src='../../assets/image/logo.jpg' className='head-img'></Image>
            </View>
            <View className='mine-desc fl'>
              <View className='mine-name'>userName</View>
              <View className='mine-level'>
                <Text class='icon iconfont icon-Lv'></Text>
                <Text className='mine-num'>{9}</Text>
              </View>
            </View>
          </View>
          {/* 功能导航 */}
          <View className='mine-nav'>
            {
              navList.map(v => (
                <View className='nav-item' key={v.id}>
                  <View className={v.icon}></View>
                  <View>{v.text}</View>
                </View>
              ))
            }
          </View>
        </View>
        {/* 我的音乐信息 */}
        <View className='mine-music'>
          {/* 我的音乐 */}
          <View className='my-music'>
            <View className='mine-title'>我的音乐</View>
            <View className='quick-entry'>
              {
                quickList.map(v => (
                  <View className='quick-item' key={v.id}>
                    <Image src='../../assets/image/logo.jpg' className='cover-img'></Image>
                    <View>{v.text}</View>
                  </View>
                ))
              }
            </View>
          </View>
          {/* 最近播放 */}
          <View className='recently-played'>
            <View className='mine-title'>最近播放</View>
            <View className='played-list'>
              {
                [1, 2, 3, 4, 5, 6, 6, 8, 9].map(v => (
                  <View className='played-item clearfix' key={v}>
                    <Image src='../../assets/image/logo.jpg' className='played-img fl'></Image>
                    <View className='played-desc fr'>
                      <View className='music-name'>{v}</View>
                      <View className='continue-play'>继续播放</View>
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
          {/* 我的歌单 */}
          <View className='mine-song'>
            <View className='mine-list clearfix'>
              <View className='mine-title fl'>我的歌单1</View>
              <View className='mine-title fl'>收藏歌单2</View>
            </View>
            <View className='song-list'>
              {
                [1, 2, 3, 4, 5, 6, 6, 8, 9].map(v => (
                  <View className='song-item clearfix' key={v}>
                    <Image src='../../assets/image/logo.jpg' className='song-img fl'></Image>
                    <View className='song-desc fl'>
                      <View className='song-name'>{v}</View>
                      <View className='song-num'>10 首</View>
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}
