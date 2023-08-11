import { useRef } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { IRESULTBOX } from './components/ResultBox'

const App = () => {

  const resultboxRef = useRef<IRESULTBOX>()
  const bottomResultBoxRef = useRef<IRESULTBOX>()

  const onChagneText = (txt:string) => {
    resultboxRef.current?.onChangeText(txt)
    bottomResultBoxRef.current?.onChangeText(txt)
  }
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox ref = {resultboxRef}/>
          <TextArea onChangeText = {onChagneText}/>
          <BottomResultBox ref = {bottomResultBoxRef}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
