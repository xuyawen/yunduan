import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

/* eslint-disable */
const navBarList = [
  { id: 1, text: '每日推荐', icon: require('../../assets/image/navbar/t_1.png') },
  { id: 2, text: '歌单', icon: require('../../assets/image/navbar/t_2.png') },
  { id: 3, text: '排行榜', icon: require('../../assets/image/navbar/t_3.png') },
  { id: 4, text: '电台', icon: require('../../assets/image/navbar/t_4.png') },
  { id: 5, text: '私人FM', icon: require('../../assets/image/navbar/t_5.png') },
]

export default class Home extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '发现'
  }


  render() {
    return (
      <View className='home'>
        {/* 轮播图 */}
        <View className='swiper-warp'>
          <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='red'
            interval={3000}
            circular
            indicatorDots
            autoplay
          >
            {
              [1, 2, 3].map(v => (
                <SwiperItem key={v}>
                  <Image className='swiper-img' src={'../../assets/image/logo.jpg'}></Image>
                </SwiperItem>
              ))
            }
          </Swiper>
        </View>
        {/* 导航栏 */}
        <View className='nav-bar'>
          {
            navBarList.map(v => (
              <View key={v.id} className='nav-item'>
                <Image
                  className='nav-icon'
                  src={v.icon}
                ></Image>
                <View className='nav-text'>
                  <Text>{v.text}</Text>
                </View>
              </View>
            ))
          }
        </View>
        {/* 推荐歌单 */}
        <View className='recommend-song'>
          <View className='title-tip'>推荐歌单</View>
          <View className='title-wrap clearfix'>
            <View className='title-desc fl'>为你精挑细选</View>
            <View className='title-more fr'>查看更多</View>
          </View>
          <View class='song-menu'>
            {
              ['ffdsfdsfdsfdfdfsd', 2, 3, 4, 5].map(v => (
                <View key={v} className='song-item'>
                  <Image src={'../../assets/image/logo.jpg'} className='song-img'></Image>
                  <View className='song-desc'>
                    <Text>{v}</Text>
                  </View>
                </View>
              ))
            }
          </View>
        </View>
        {/* 推荐歌曲 */}
        <View className='recommend-song'>
          <View className='title-tip'>推荐歌曲</View>
          <View className='title-wrap clearfix'>
            <View className='title-desc fl'>根据你喜欢的歌曲推荐</View>
            <View className='title-more fr'>查看更多</View>
          </View>
          <View class='song-list'>
            {
              [1, 2, 3, 4, 5].map(v => (
                <View key={v} className='song-item'>
                  <Image src={'../../assets/image/logo.jpg'} className='song-img'></Image>
                  <View className='song-desc clearfix'>
                    <View className='fl'>
                      <View className='song-title'>
                        <Text className='song-name'>You Don't Know Me</Text>
                        <Text className='song-author'> - Ofenbach</Text>
                      </View>
                      <View className='song-brief'>Know Me</View>
                    </View>
                    <View className='song-play fr'>
                      <View className='play-wrap'>
                        <Text className='icon iconfont icon-play' />
                        {/* <Text className='icon iconfont icon-stop' /> */}
                      </View>
                    </View>
                  </View>
                </View>
              ))
            }
          </View>
        </View>
      </View>
    )
  }
}
