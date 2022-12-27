import React from 'react'

type deleteTodoProps ={
  title : string
}

const DeleteTodo = (props :deleteTodoProps) => {
  return (
    <>
      <button>{props.title}</button>
    </>
  )
}

export default DeleteTodo