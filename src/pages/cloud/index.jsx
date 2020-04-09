import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

export default class Cloud extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '云村'
  }

  render() {
    return (
      <View className='cloud'>
        <View className='square-list'>
          {/* 瀑布流-左 */}
          <View className='list list-left'>
            {
              [1, 2, 3, 4, 5].map(v => (
                <View key={v} className='news-item'>
                  <Image src='../../assets/image/logo.jpg' className='news-img'></Image>
                  <View className='news-desc'>
                    <View className='news-text'>{v}</View>
                    <View className='news-more clearfix'>
                      <Text className='news-author fl'>kkk</Text>
                      <View className='fr'>
                        <Text className='news-like'>123赞</Text>
                        <Text className='icon iconfont icon-more'></Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            }
          </View>
          {/* 瀑布流-右 */}
          <View className='list list-right'>
            {
              [1, 2, 3, 4, 5].map(v => (
                <View key={v} className='news-item'>
                  <Image src='../../assets/image/logo.jpg' className='news-img'></Image>
                  <View className='news-desc'>
                    <View className='news-text'>{v}</View>
                    <View className='news-more clearfix'>
                      <Text className='news-author fl'>kkk</Text>
                      <View className='fr'>
                        <Text className='news-like'>123赞</Text>
                        <Text className='icon iconfont icon-more'></Text>
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
