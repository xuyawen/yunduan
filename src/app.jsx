import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'
import './assets/icon/iconfont.css';
// import './assets/icon/iconfont.js';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  config = {
    pages: [
      'pages/home/index',
      'pages/video/index',
      'pages/mine/index',
      'pages/cloud/index',
      'pages/account/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: '云端音乐',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#888",
      selectedColor: "#ff2419",
      backgroundColor: "#f9f9f9",
      borderStyle: "white",
      list: [
        {
          "pagePath": "pages/home/index",
          "iconPath": "assets/image/tab/t_1.png",
          "selectedIconPath": "assets/image/tab/t_11.png",
          "text": "发现"
        },
        {
          "pagePath": "pages/video/index",
          "iconPath": "assets/image/tab/t_2.png",
          "selectedIconPath": "assets/image/tab/t_21.png",
          "text": "视频"
        },
        {
          "pagePath": "pages/mine/index",
          "iconPath": "assets/image/tab/t_3.png",
          "selectedIconPath": "assets/image/tab/t_31.png",
          "text": "我的"
        },
        {
          "pagePath": "pages/cloud/index",
          "iconPath": "assets/image/tab/t_4.png",
          "selectedIconPath": "assets/image/tab/t_41.png",
          "text": "云村"
        },
        {
          "pagePath": "pages/account/index",
          "iconPath": "assets/image/tab/t_5.png",
          "selectedIconPath": "assets/image/tab/t_51.png",
          "text": "账号"
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
