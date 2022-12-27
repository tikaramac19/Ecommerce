import React from "react";
import styled from "styled-components";
type SaveTodoProps = {
  title: string;
  handleTodoList?: () => any;
  hasDisabled : boolean
};
const SaveTodo = (props: SaveTodoProps) => {
  // const random = (a:number, b:number) : any =>{
  //     console.log(a + b);
  // }
  // console.log(props.hasDisabled);
  return (
    <>
      <Button onClick={props.handleTodoList} disabled={props.hasDisabled}>{props.title}</Button>
    </>
  );
};

export default SaveTodo;

// styling using styled component

let Button = styled.button`
  color: #fff;
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  border: 1px solid black;
  outline: none;
  font-weight: bold;
  border-radius: 0.2rem;
  background-color: #333;
  cursor: pointer;

  &:hover {
    background-color: #332;
  }
`;
