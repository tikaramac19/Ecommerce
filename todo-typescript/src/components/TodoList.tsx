import React, { useState } from "react";
import DeleteTodo from "../common/Buttons/DeleteTodo";
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
    <div className="todoList-container">
      {todoList?.map((item, id) => {
        return (
          <div key={id}>
            <h1>
              {item}
              <span>
                <button
                  onClick={() => {
                    handleDeleteTodo(id);
                  }}
                >
                  Delete
                </button>
              </span>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
