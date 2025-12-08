import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * 插槽2 父组件向子组件传递数据
 * 只读
 */

// 列表组件 插槽
function List({ children, title1, footer1 = <div>默认底部</div> }) {
  console.log(children)
  return (
    <>
      <h2>{title1}</h2>
      <ul>{children}</ul>
      {footer1}
    </>
  )
}

function App() {
  return (
    <>
      <List title1="列表1" footer1={<p>这是底部内容1</p>}>
        <li>列表项1</li>
        <li>列表项2</li>
        <li>列表项3</li>
      </List>
      <List title1="列表2" footer1={<p>这是底部内容2</p>}>
        <li>内容A</li>
        <li>内容B</li>
        <li>内容C</li>
      </List>
      <List title1="列表3">
        <li>内容X</li>
        <li>内容Y</li>
      </List>
    </>
  )
}

export default App
