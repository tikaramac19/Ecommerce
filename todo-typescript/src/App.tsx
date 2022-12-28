import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./Pages/Login/Login.pages";
import Register from "./Pages/Register/Register.pages";
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login message="Login Page" />} />
          <Route path="/register" element={<Register />} />
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
