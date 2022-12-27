import React from 'react'

type SaveTodoProps = {
    title: string,
    handleTodoList ?:()=>any
}

const SaveTodo = (props:SaveTodoProps) => {
  return (
    <>
        <button onClick={props.handleTodoList}>{props.title}</button>
    </>
  )
}

export default SaveTodo