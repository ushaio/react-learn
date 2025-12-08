import { createContext, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Context 1
 * 多层级回传
 */

export function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  )
}

/**
 * Heading
 * 根据 level 返回不同大小的标题
 * children: 标题内容，即标题的文本
 */
export function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    default:
      throw Error('Invalid heading level: ' + level)
  }
}

export default function App() {
  return (
    <>
      <div>
        <Section>
          {/* 一层 */}
          <Heading level={1}>主标题</Heading>
          <Section>
            {/* 二层 */}
            <Heading level={2}>副标题</Heading>
            <Heading level={2}>副标题2</Heading>
            <Section>
              {/* 三层 */}
              <Heading level={3}>三级标题</Heading>
            </Section>
          </Section>
          {/* 一层 */}
          <Heading level={2}>副标题</Heading>
          <Heading level={3}>三级标题</Heading>
          <Heading level={4}>四级标题</Heading>
          <Heading level={5}>五级标题</Heading>
        </Section>
      </div>
    </>
  )
}

// export default App
