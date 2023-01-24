import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./Pages/Login/Login.pages";
import Register from "./Pages/Register/Register.pages";
import MemoEx from "./hooks/MemoEx";
import AsyncTodo from "./components/AsyncTodo";
import Pagination from "./components/pagination/Pagination";
function App() {
  const [activePage, setActivePage] = useState(1);

  const onChangeHandler = (values: number) => {
    setActivePage(values)
  }

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login message="Login Page" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/memo" element={<MemoEx />} />
          <Route path="/pagination" element={<Pagination count={500} activePage={activePage} onChangeHandler={onChangeHandler} />} />
          <Route path="async" element={<AsyncTodo />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #757;
`;
