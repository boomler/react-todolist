import React from 'react'

export type todoItem = {
  title: string,
  id: number
}

type Props = {
  items: todoItem[],
  onDeleteItem: (index: number) => void
}
export default function Items(props: Props) {
  return (
    <>
      {props.items.map((item, index) => <p key={item.id} onClick={() => {
        props.onDeleteItem(index)
      }}>
        {item.title}
      </p>)}
    </>
  )
}
