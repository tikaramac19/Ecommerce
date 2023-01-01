import React from "react";
import Layout from "../../../components/layout/hoc/layout";
import "./_login.scss";
const LoginPage = () => {
  return (
    <>
      <h1>Hello from Login Page</h1>
    </>
  );
};

export const Login =  Layout(LoginPage);
