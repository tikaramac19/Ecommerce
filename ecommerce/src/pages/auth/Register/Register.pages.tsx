import React from "react";
import Layout from "../../../components/layout/hoc/layout";
import "./_register.scss";
const RegisterPage = () => {
  return (
    <>
      <h1>Hello from Registration Page</h1>
    </>
  );
};

export const Register = Layout(RegisterPage);
