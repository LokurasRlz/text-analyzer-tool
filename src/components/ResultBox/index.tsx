import {forwardRef, useImperativeHandle, useState} from 'react'
import { pronouns as PRONOUNS } from '../../data/pronouns'
import './index.scss'

interface IRESULT {
  title: string,
  value: number
}

export interface IRESULTBOX {
  onChangeText: (txt:string) => void
}
const ResultBox = forwardRef((props, ref) => {

  const [resultBar, setResultBar] = useState<Array<IRESULT>>([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ])

  useImperativeHandle(ref, () => ({
    onChangeText(txt:string) {
      calculateParams(txt)
    }
  }))



  const calculateParams = (txt:string) => {
    const words = txt.trim().split(/\s+/)
    const characters = txt.length
    const sentences = txt.split('.').length
    const paragraphs = txt.replace(/\n$/gm, '').split('\n').length
    let _words = words.map(it=>{
      return it.replace(/([^\w]+|\s+)/g,'')
    })
    const pronouns = _words.filter((word) => {
      let _word = word
      _word =_word.toLowerCase()
      return PRONOUNS.includes(_word)
    }).length

    const _resultBar = [...resultBar]

    _resultBar[0].value = words.length
    _resultBar[1].value = characters
    _resultBar[2].value = sentences
    _resultBar[3].value = paragraphs
    _resultBar[4].value = pronouns
    setResultBar(_resultBar)
  }

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
})

export default ResultBox
