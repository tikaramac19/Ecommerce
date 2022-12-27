import React from 'react';
import styled from 'styled-components';
import './App.css';
import Todo from './components/Todo';
function App() {
  return (
    <Wrapper>
        <Title>Todo App Typescript</Title>
        <Todo />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    margin : 0px;
    padding : 0px;
    height: 100vh;
    width: 100%;
    display : flex;
    flex-direction : column;
    align-items: center;
    background-color : #757

`
const Title = styled.h1`
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.4rem;
`
