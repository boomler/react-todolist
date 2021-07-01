import React, {ChangeEvent, createRef, KeyboardEvent} from 'react'
import style from './index.module.css'
interface Props {
  addItem: (x:string) => void
}

interface State {
  inputValue: string
}
export default class TodoInput extends React.Component<Props, State> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: ''
    }

    this.inputRef = createRef()
  }

  onKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.keyCode === 13) {
      console.log(this.state.inputValue)
      if (this.state.inputValue === '333') {
        this.inputRef.current.style.borderColor="red"
        return
      }
      this.props.addItem(this.state.inputValue)
      this.setState({inputValue: ''})
    }
  }

  changeInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return <input
      ref={this.inputRef}
        className={style.input}
      value={this.state.inputValue}
      onChange={this.changeInput.bind(this)}
      onKeyPress={(e) => this.onKeyPress(e)}
      placeholder="请输入待办项"/>
  }
}
