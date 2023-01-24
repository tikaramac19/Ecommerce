import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../store/todoSlice";
const AsyncTodo = () => {
    const { status } = useSelector((state: any) => state.todos)
    console.log(status);
    return (<>
        <h1>hello todo</h1>
    </>)
}

export default AsyncTodo;