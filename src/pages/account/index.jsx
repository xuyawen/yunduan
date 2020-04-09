import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const operateList = [
  {
    id: 1,
    text: '我的消息',
    icon: 'icon iconfont icon-youjian'
  },
  {
    id: 2,
    text: '我的好友',
    icon: 'icon iconfont icon-haoyou'
  },
  {
    id: 3,
    text: '个人主页',
    icon: 'icon iconfont icon-zhuye'
  },
]

const serveList = [
  {
    id: 1,
    text: '关于',
    icon: 'icon iconfont icon-b_icon__about'
  }
]
export default class Account extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '账号'
  }

  render() {
    return (
      <View className='account'>
        {/* 背景图 */}
        <View className='user-banner'></View>
        {/* 账户信息 */}
        <View className='mine-music'>
          <View className='user-detail'>
            <View className='user-info clearfix'>
              <View className='user-head fl'>
                <Image src='../../assets/image/logo.jpg' className='head-img'></Image>
              </View>
              <View className='user-desc fl'>
                <View className='user-name'>userName</View>
              </View>
            </View>
            {/* 用户操作 */}
            <View className='user-operate'>
              {
                operateList.map(v => (
                  <View className='operate-item' key={v.id}>
                    <View>
                      <Text class={v.icon}></Text>
                    </View>
                    <View>{v.text}</View>
                  </View>
                ))
              }
            </View>
            <View className='mine-title'>服务</View>
            <View className='user-serve'>
              {
                serveList.map(v => (
                  <View className='serve-item clearfix' key={v.id}>
                    <View class={v.icon}></View>
                    <View className='serve-text'>{v.text}</View>
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
