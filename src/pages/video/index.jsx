import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class PVideo extends Component {

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
        <Text>视频</Text>
      </View>
    )
  }
}
