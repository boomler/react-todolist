import React from 'react'
import style from './index.css';
import TodoInput from './components/Input/index'
import TodoItems, {TODO_STATUS, todoItem} from './components/TodoItem/items'

interface Props {}

interface State {
  items: todoItem[]
}

export default class TodoList extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem (title: string) {
    const item: todoItem = {title,status: TODO_STATUS.TODO }
    this.setState({items: [...this.state.items, item]})
  }

  deleteItem (index: number) {
   const newList = this.state.items.slice(0)
    this.setState({items: newList.splice(index, 1)})
  }

  render()
  {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <h1>Todo List</h1>
        </header>
        <TodoInput addItem={this.addItem.bind(this)}/>
          <TodoItems items={this.state.items}  onDeleteItem={this.deleteItem.bind(this)}/>
      </div>
    );
  }
}

