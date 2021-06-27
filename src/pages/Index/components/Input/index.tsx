import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './index.css'
interface Props {
  addItem: (x:string) => void
}

interface State {
  inputValue: string
}
export default class TodoInput extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  onKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.keyCode === 13) {
      this.props.addItem(this.state.inputValue)
      this.setState({inputValue: ''})
    }
  }

  changeInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return <input
        className={style.input}
      value={this.state.inputValue}
      onChange={this.changeInput.bind(this)}
      onKeyPress={(e) => this.onKeyPress(e)}
      placeholder="请输入待办项"/>
  }
}