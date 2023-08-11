import './index.scss'

export interface TEXTAREA_PROPS {
  onChangeText(txt:string):void
} 
const TextArea = (props:TEXTAREA_PROPS) => {
  const {onChangeText} = props
  const onChangeTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {

    onChangeText(e.target.value)
  }
  return <textarea className="text-area" placeholder="Paste your text here..." autoFocus onChange = {(e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    onChangeTextArea(e)
  }}/>
}

export default TextArea
