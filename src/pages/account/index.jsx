import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

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
        <Text>账号</Text>
      </View>
    )
  }
}
