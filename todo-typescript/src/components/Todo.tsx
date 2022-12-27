import React, { useState } from "react";
import styled from "styled-components";
import SaveTodo from "../common/Buttons/SaveTodo";
import TodoList from "./TodoList";
const Todo = () => {
  const [enteredText, setEnteredText] = useState<string>("");
  const [todoList, setTodoLists] = useState<string[] | undefined>([]);
  const [hasDisabled, setHasDisabled] = useState<boolean>(false);
  function handleTodoList() {
    let tempTodoList: string[] = todoList ? [...todoList] : [];

    if (enteredText.length > 0) {
      tempTodoList.push(enteredText);
      setTodoLists(tempTodoList);
      // setHasDisabled(false);
    }

    // if (enteredText.length < 0) {
    //   setHasDisabled(true);
    // }
  }
  // console.log(enteredText.length);
  return (
    <div className="todo-container">
      <div className="input-field">
        <InputField
          type="text"
          onChange={(e) => setEnteredText(e.target.value)}
          placeholder="enter task"
        />
        <SaveTodo
          title="Save Todo"
          handleTodoList={handleTodoList}
          hasDisabled={hasDisabled}
        />
        <TodoList todoList={todoList} setTodoList={setTodoLists} />
        <TodoCount className="totalList">
          Total Todos : {todoList?.length}
        </TodoCount>
      </div>
    </div>
  );
};

export default Todo;

const InputField = styled.input`
  height: 40px;
  width: 500px;
  margin: 0rem 2rem;
  margin-top: 3rem;
  font-size: 1.1rem;
  padding: 0rem 0.7rem;
  border: none;
  outline: none;
  border-radius: 0.2rem;
`;
const TodoCount = styled.div`
  font-size: 1.1rem;
  color: #fff;
`;
