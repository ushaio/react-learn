import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * 插槽1
 */

// 列表组件 插槽
function List({ children }) {
  console.log(children)
  return (
    <ul>
      {children}
    </ul>
  )
}

function App() {

  return (
    <>
      <List>
        <li>列表项1</li>
        <li>列表项2</li>
        <li>列表项3</li>
        <li>列表项4</li>
      </List>
      <List>
        <li>列表项11</li>
        <li>列表项22</li>
        <li>列表项33</li>
        <li>列表项44</li>
      </List>
    </>
  )
}

export default App
