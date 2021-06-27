import React from 'react'

export enum TODO_STATUS {
    TODO,
    DONE
}

export type todoItem = {
    title: string,
    status: TODO_STATUS
}

type Props = {
    items: todoItem[],
    onDeleteItem: (index: number) => void
}
export default function Items (props: Props) {
    return (
        <>
            {props.items.map((item, index) => <p key={item.title} onClick={() => {
              props.onDeleteItem(index)
            }}>
              {item.title}
            </p>)}
        </>
    )
}
