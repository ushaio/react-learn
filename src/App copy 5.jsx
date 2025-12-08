import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * 插槽3 子组件向父组件传递数据
 * 只读
 */

function Detail({ onActive }) {
  const [status, setStatus] = useState(false)
  function handleClick() {
    setStatus(!status) // 切换状态
    console.log('点击了')
    onActive('hello world：' + status) // 传给父组件 function App 
  }
  return (
    <div>
      <p style={{
        color: status ? 'red' : 'blue'
      }}>这是详情内容</p>
      <button onClick={handleClick}>点击</button>
    </div>
  )
}

function App() {
  const [fatherStatus, setFatherStatus] = useState(false)
  function handleActive(sonStatus) {
    setFatherStatus(sonStatus) // 更新父组件状态，将子组件传过来的状态值
  }
  return (
    <>
      <Detail onActive={handleActive}></Detail>
      <p>父组件接收到：{fatherStatus}</p>
    </>
  )
}

export default App
