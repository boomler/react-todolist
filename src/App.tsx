import React, {useEffect, useState} from 'react'
import style from './app.module.css';
import TodoInput from './components/Input/index'
import TodoItems, {todoItem} from './components/items'

interface Props {
}

interface State {
  items: todoItem[],
  currentTime: number,
}

export default  () => {
  let countDownTimer: NodeJS.Timeout = null;

  const [currentTime, setCurrentTime] = useState(Date.now())

  const [items, setItems] = useState([])

  const addItem = (title: string) => {
    const item: todoItem = {title, id: Date.now()}
    setItems([...items, item])
  };

  const deleteItem = function (index: number) {
    const newList = items.slice(0)

    newList.splice(index, 1);
    setItems(newList)
  };

  useEffect(() => {
    countDownTimer = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)
    return () => clearInterval(countDownTimer)
  })


  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Todo List</h1>
        <p>当前时间是： {currentTime}</p>
      </header>
      <TodoInput addItem={addItem}/>
      <TodoItems items={items}
                 onDeleteItem={deleteItem}/>
    </div>
  );
}

