import React from "react";
import { BsFillCartFill } from "react-icons/bs";
interface buttonProps {
  title: string;
}

const Button = (props: buttonProps) => {
  const { title } = props;
  return (
    <>
      <button>{title} <BsFillCartFill /></button>
    </>
  );
};
export default Button;
