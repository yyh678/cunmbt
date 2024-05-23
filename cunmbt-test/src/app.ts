import { Component, PropsWithChildren } from 'react'
import './app.scss'
// 全局引入 Taro UI 样式
import 'taro-ui/dist/style/index.scss'

class App extends Component<PropsWithChildren>  {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
