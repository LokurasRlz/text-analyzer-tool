import './index.scss'
import { forwardRef, useImperativeHandle, useState } from 'react'

interface IBottomResultBar{
  title: string,
  value: string | number
}
const BottomResultBox = forwardRef((props, ref) => {
  const [bottomResultBar, setBottomresultBar] = useState([
    {
      title: 'Average Reading Time:',
      value: '-',
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ])
  useImperativeHandle(ref, () => ({
    onChangeText(txt:string) {

      calculateParams(txt)
    },
  }))
  const calculateParams = (txt:string): void => {
    const wpm = 225;
    const words = txt.trim().split(/\s+/).length;
    const time = Math.ceil(words/wpm)

    const longestWord = txt.trim().split(/\s+/).reduce((a, b) => a.length > b.length ? a : b, '')

    const _bottomResultBar = [...bottomResultBar]
    _bottomResultBar[0].value =`~${time.toString()} minutes`
    _bottomResultBar[1].value = longestWord
    setBottomresultBar(_bottomResultBar)
  }
  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
})

export default BottomResultBox
