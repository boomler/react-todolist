import React from 'react'
import style from './app.module.css';
import TodoInput from './components/Input/index'
import TodoItems, {todoItem} from './components/TodoItem/items'

interface Props {
}

interface State {
  items: todoItem[]
}

export default class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem(title: string) {
    const item: todoItem = {title, id: Date.now()}
    this.setState({items: [...this.state.items, item]})
  }

  deleteItem(index: number) {
    const newList = this.state.items.slice(0)

    newList.splice(index, 1);
    this.setState({items: newList})
  }

  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <h1>Todo List</h1>
        </header>
        <TodoInput addItem={this.addItem.bind(this)}/>
        <TodoItems items={this.state.items}
                   onDeleteItem={this.deleteItem.bind(this)}/>
      </div>
    );
  }
}

