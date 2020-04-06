import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

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
        <Text>云村</Text>
      </View>
    )
  }
}
