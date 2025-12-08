import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * 组件通信
 */
function Detail({ content, active }) {
  return (
    <>
      <p>{content}</p>
      <p>状态：{active ? '✅' : '❌'}</p>
    </>
  )
}

function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </>
  )
}

function Article2({ title, articleData }) {
  return (
    <>
      <h1>{title}</h1>
      {/* Detail */}
      <Detail {...articleData} />
      {/* <p>{content}</p> */}
      {/* <p>状态：{active ? '✅' : '❌'}</p> */}
    </>
  )
}

// 根组件 
function App() {
  const articleData = {
    title: '文章标题1',
    detailData: {
      content: '文章内容1',
      active: false
    }
  }
  return (
    <>
      <Article2 title={articleData}  {...articleData} />
      <Article2 title="文章标题2" content="文章内容2" active />
      <Article2 title="文章标题3" content="文章内容3" />
    </>
  )
}

export default App
