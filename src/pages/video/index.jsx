import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class MVideo extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '视频'
  }

  render() {
    return (
      <View className='video'>
        {/* 推荐MV列表 */}
        <View className='recommend-mv'>
          <View className='title-wrap clearfix'>
            <View className='title-desc fl'>MV精选</View>
            <View className='title-more fr'>更多</View>
          </View>
          <View class='mv-menu clearfix'>
            {
              ['fdsfdfds', 2, 3, 4].map(v => (
                <View key={v} className='mv-item fl'>
                  <Image src='../../assets/image/logo.jpg' className='mv-img'></Image>
                  <View className='mv-desc'>
                    <View className='mv-title'>{v}</View>
                    <Text className='mv-author'>{v}</Text>
                  </View>
                </View>
              ))
            }
          </View>
        </View>
        {/* MV列表 */}
        <View className='recommend-mv'>
          <View className='title-wrap clearfix'>
            <View className='title-desc fl'>更多精彩MV</View>
            <View className='title-more fr'>分类</View>
          </View>
          <View class='mv-list'>
            {
              ['fdsfdfds', 2, 3, 4, 5, 6].map(v => (
                <View key={v} className='mv-item'>
                  <View className='mv-img'>
                    <Image src='../../assets/image/logo.jpg' className='img'></Image>
                  </View>
                  <View className='mv-name'>{v}</View>
                  <View className='mv-operate clearfix'>
                    <View className='fl'>
                      <View className='mv-author'>
                        <Image className='author-head' src='../../assets/image/logo.jpg'></Image>
                        <Text>author</Text>
                      </View>
                    </View>
                    <View className='fr'>
                      <View className='mv-like dib'>
                        <Text className='icon iconfont icon-zan'></Text>
                      </View>
                      <View className='mv-remark dib'>
                        <Text className='icon iconfont icon-pinglun'></Text>
                      </View>
                      <View className='mv-more dib'>
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
