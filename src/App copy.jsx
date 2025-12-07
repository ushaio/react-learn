import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 根组件 
function App() {
  const [count, setCount] = useState(0)
  const txt1 = "内容1";
  const txt2 = "内容2";
  let txt3 = "";
  const flag = false;
  if (flag) {
    txt3 = <span>flag = {flag}：正确</span>
  } else {
    txt3 = <p>flag = {flag}：错误</p>
  }

  const list1Default = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
    { id: 4, name: '赵六' }
  ]
  const [list1, setList1] = useState(list1Default)
  const listContent = list1.map(item => (
    <Fragment key={item.id}>
      <li>id：{item.id} |  姓名：{item.name}</li>
      <li>-------------</li>
    </Fragment>
  ))
  function addList1User() {
    setList1([
      ...list1,
      {
        id: list1.length + 1,
        name: '新用户'
      }
    ])
  }

  function resetList1() {
    setList1(list1Default)
  }

  // let btnTxt1 = '按钮1未点击';
  const [btnTxt1, setBtnTxt1] = useState('按钮1未点击')
  function handleClick1(e) {
    setBtnTxt1("按钮1点击了")
    console.log('按钮1被点击了', e)
  }

  // 数组1
  const data1Default = {
    name: '张三',
    age: 18,
    sex: '男'
  }

  const [data1, setData1] = useState(data1Default)

  function editData1Age() {
    setData1({
      ...data1, // 展开运算符，将data1的属性都展开到新对象中
      age: data1.age + 1 // 变更的属性写在最后面，否则将会被默认值覆盖
    })
  }

  function resetData1() {
    setData1(data1Default)
  }

  const logoStyleDefault = {
    width: 200,
    height: 200
  }
  const [logoStyle, setLogoStyle] = useState(logoStyleDefault)

  function moreBig() {
    setLogoStyle({
      ...logoStyle,
      width: logoStyle.width * 1.2,
      height: logoStyle.height * 1.2
    })
  }

  function moreSmall() {
    setLogoStyle({
      ...logoStyle,
      width: logoStyle.width * 0.8,
      height: logoStyle.height * 0.8
    })
  }

  const imageData = {
    image: viteLogo,
    className: 'logo',
    style: {
      width: 50,
      height: 50,
      backgroundColor: 'grey'
    }
  }

  return (
    <>
      <div>
        {/* <img src={imageData.image} className={imageData.className} style={imageData.style} /> */}
        <img src={imageData.image} {...imageData} />

      </div>
      <div>
        <button onClick={moreBig}>放大</button>
        <button onClick={moreSmall}>缩小</button>
        <br></br>
        <img src={viteLogo} className="logo" style={logoStyle} />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a >
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div >
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div title={txt2}>{txt1}</div>
      <div>{txt3}</div>
      {/* 列表渲染 */}
      <div style={{ color: 'pink' }}>
        <button onClick={addList1User}>新增一个用户</button>
        <button onClick={resetList1}>重置列表1</button>
        <ul>{listContent}</ul>
      </div>
      <div>{btnTxt1}</div>
      <button onClick={handleClick1}>按钮1🔘</button>
      {/* 数组渲染 */}
      <div style={{ color: 'red' }}>
        <p>姓名：{data1.name}</p>
        <p>年龄：{data1.age}</p>
        <p>性别：{data1.sex}</p>
        <button onClick={editData1Age}>年龄+1</button>
        <button onClick={resetData1}>重置</button>
      </div>
    </>
  )
}

export default App
