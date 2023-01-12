import React from "react";
import Layout from "../../../components/layout/hoc/layout";
import "./_login.scss";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../../store/authSlice/authSlice";
import MiniNav from "../../../common/miniNav/MiniNav";
interface initialValuesTypes {
  username: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.string().min(6).required("password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues: initialValuesTypes = {
    username: "",
    password: "",
  };

  // auth notification
  const authSuccessNotification = () => {
    toast.success("User Logged In !", {
      duration: 1500,
      position: "top-right",
    });
  };
  const authErrorNotification = () => {
    toast.error("Invalid Credentials!", {
      duration: 1500,
      position: "top-right",
    });
  };

  return (
    <>
      <MiniNav />
      <div className="login-container">

        <div className="login-wrapper">
          <div className="login-left">
            <div className="login-info">
              <h2 className="title">Welcome back</h2>
              <p className="subtitle">
                Welcome back ! please enter your details.
              </p>
            </div>

            <div className="form-wrapper">
              <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={async (values: initialValuesTypes, actions) => {
                  // console.log(values);
                  const { username, password } = values;
                  // console.log(username, password);
                  const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      username,
                      password,
                    }),
                  };

                  let response = fetch(
                    "https://dummyjson.com/auth/login",
                    requestOptions
                  );
                  let data = await (await response).json();
                  if ((await response).status == 200) {
                    dispatch(addUserDetails(data));
                    authSuccessNotification();
                    setTimeout(() => {
                      navigate("/products");
                    }, 2000);
                  } else {
                    authErrorNotification();
                  }
                }}
              >
                {(props: FormikProps<initialValuesTypes>) => {
                  const {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                  } = props;

                  return (
                    <>
                      <Form className="form-container">
                        <div className="username-cont">
                          <label>Username</label>
                          <Field
                            type="text"
                            name="username"
                            values={values.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                          />
                          {errors.username && touched.username ? (
                            <h3 className="error-msg">{errors.username}</h3>
                          ) : null}
                        </div>

                        <div className="username-cont">
                          <label className="password">Password</label>
                          <Field
                            type="password"
                            name="password"
                            values={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                          />
                          {errors.password && touched.password ? (
                            <h3 className="error-msg">{errors.password}</h3>
                          ) : null}
                        </div>

                        <div className="formButtom">
                          <div className="remember">
                            <input type="checkbox" />
                            <p>Remember for 30 days</p>
                          </div>
                          <div className="forget-password">
                            <Link to={"/forget"}>Forgot password</Link>
                          </div>
                        </div>
                        <button type="submit">Sign In</button>
                      </Form>
                    </>
                  );
                }}
              </Formik>

              <div className="signIn-option">
                <div className="google-signin">
                  <button>
                    <FcGoogle />
                    <span>Sign in with Google</span>
                  </button>
                </div>
                <div className="dont-have-account">
                  <p>
                    Don't have an account ?{" "}
                    <Link to={"/auth/register"}>Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="login-right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Login = Layout(LoginPage);
