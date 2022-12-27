import React, { useState } from "react";
import DeleteTodo from "../common/Buttons/DeleteTodo";
import styled from "styled-components";
type todoListProps = {
  todoList: string[] | undefined;
  setTodoList?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

const TodoList = (props: todoListProps) => {
  const [remainingTodo, setRemainingTodo] = useState<string[]>([]);
  const { todoList, setTodoList } = props;
  // console.log(todoList);

  const handleDeleteTodo = (idValue: number) => {
    // console.log(idValue)
    const tempTodoList: string[] = todoList ? [...todoList] : [];
    // console.log(tempTodoList)
    let filterItem = tempTodoList.filter((item, id) => {
      // console.log(id)
      if (idValue !== id) {
        return true;
      }
    });

    setTodoList && setTodoList(filterItem);

    setTodoList?.(filterItem);
  };

  return (
    <TodoContainer className="todoList-container">
      {todoList?.map((item, id) => {
        return (
          <TodoItemContainer key={id}>
            <TodoItem>
              <div>{item}</div>

              <SaveButton
                onClick={() => {
                  handleDeleteTodo(id);
                }}
              >
                Delete
              </SaveButton>
            </TodoItem>
          </TodoItemContainer>
        );
      })}
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.div`
  margin: 1rem 0rem;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-radius: 0.5rem;
`;
const TodoItemContainer = styled.div`
  min-width: 650px;
  margin: 0.3rem 0rem;
  font-size: 0.6rem;
  border: 1px solid #758;
  background-color: #333;
  padding: 0rem 0.7rem;
  color: white;
  border-radius: 0.7rem;
  outline: none;
`;
const TodoItem = styled.h1`
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
const SaveButton = styled.button`
  padding: 0.2rem 1rem;
  font-weight: bold;
  cursor: pointer;
`;
