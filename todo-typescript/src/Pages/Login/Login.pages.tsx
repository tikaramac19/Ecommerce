import React, { useState } from "react";
import MyBtn from "../../common/Practice/Btn.common";
import "./_Login.scss";
import styled from "styled-components";
import * as Yup from "yup";
import {
  Formik,
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
} from "formik";

interface formValues {
  username: string;
  password: string;
}
interface otherMessage {
  message: string;
}

interface Errors {
  username?: string;
  password?: string;
}

const Login: React.FC<otherMessage> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const initialValues: formValues = {
    username: username,
    password: password,
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("username required"),
    password: Yup.string()
      .min(8, "password length should be  min 8 letter")
      .required("password required"),
  });

  return (
    <>
      <LoginWrapper>
        <LoginTitle>{props.message}</LoginTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(value) => console.log(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormField type="email" name="username" placeholder="username" />
              {errors.username && touched.username && (
                <ErrorMsg>{errors.username}</ErrorMsg>
              )}
              <FormField
                type="password"
                name="password"
                placeholder="password"
              />
              {errors.password && touched.password && (
                <ErrorMsg>{errors.password}</ErrorMsg>
              )}

              <MyBtn title="Login" />
            </Form>
          )}
        </Formik>
      </LoginWrapper>
    </>
  );
};
export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const FormField = styled.input`
  margin: 2rem 0rem;
  display: block;
  height: 42px;
  width: 300px;
`;
const ErrorMsg = styled.span`
  font-size: 1.1rem;
  margin: 0rem 1rem;
  color: #333;
`;
