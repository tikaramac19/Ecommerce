import React, { useState } from 'react'
import SaveTodo from '../common/Buttons/SaveTodo'
import TodoList from './TodoList';
const Todo = () => {
    const [enteredText, setEnteredText] = useState<string>('');
    const [todoList, setTodoLists] = useState<string[] | undefined>([]);

   function handleTodoList(){
        let tempTodoList:string[] = todoList ? [...todoList] : [];
        tempTodoList.push(enteredText)
    
        setTodoLists(tempTodoList);
        // console.log(tempTodoList);
   }  

  return (
    <div className="todo-container">
        <div className="input-field">
            <input type="text" onChange={(e)=> setEnteredText(e.target.value)}/>
            <SaveTodo title='Save Todo' handleTodoList={handleTodoList}/>
            <TodoList todoList ={todoList} setTodoList={setTodoLists} />
            <div className="totalList">
              Total Todos : {todoList?.length}
            </div>
        </div>
    </div>
  )
}

export default Todo