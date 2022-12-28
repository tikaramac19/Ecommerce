import React, { useState } from "react";
import { booksTypes } from "./Types";

const initial: booksTypes = {
  bookname: "Avatar",
  bookPrice: 23000,
  autherName: "James camaron",
  totalPage: 765,
  description: "what a book man !",
};

const ExampleTypes = () => {
  const [books, setBooks] = useState<booksTypes | null>(initial);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setBooks({
      bookname: "Chinoo",
      bookPrice: 1200,
      autherName: "Tikaram Acharya",
      totalPage: 235,
      description: "Nice book !",
    });
  };
  return (
    <>
      <div>
        <h1>{books?.bookname}</h1>
        <h2>{books?.bookPrice}</h2>
        <h2>{books?.autherName}</h2>
        <h2>{books?.totalPage}</h2>
        <h2>{books?.description}</h2>
      </div>
      <button onClick={(e) => handleClick(e)}>updateBooks</button>
    </>
  );
};

export default ExampleTypes;
