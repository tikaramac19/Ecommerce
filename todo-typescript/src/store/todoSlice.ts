import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface todosItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface fetchTodoError {
  message: string;
}

// interface initialStateType {
//   todos: todosItemType[];
// }
interface todosType {
  todos: todosItemType[];
  error: string | null;
  status: "pending" | "success";
}

const initialState: todosType = {
  todos: [],
  error: "",
  status: "pending",
};

export const fetchTodo = createAsyncThunk("todos/fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result: todosType[] = await response.json();

  return result;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
      
  }
});

export default todoSlice.reducer;
