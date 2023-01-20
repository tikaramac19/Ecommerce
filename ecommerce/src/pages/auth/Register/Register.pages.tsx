import React, { useState } from "react";
import Layout from "../../../components/layout/hoc/layout";
import "./_register.scss";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import MiniNav from "../../../common/miniNav/MiniNav";
interface initialValuesTypes {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IformStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IformStatusProps = {
  success: {
    message: "Signup successfully.",
    type: "success",
  },
  duplicate: {
    message: "email already exist. please use different email-id",
    type: "error",
  },
  error: {
    message: "something went wrong.please try again",
    type: "error",
  },
};

const SignupSchema = Yup.object().shape({
  fullname: Yup.string().required("name is required"),
  username: Yup.string().required("username is required"),
  email: Yup.string().email("invalid email").required("email is required"),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string()
    .required("confirm password is required")
    .oneOf([Yup.ref("password"), null], "password must match"),
});

const RegisterPage = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });

  const initialValues: initialValuesTypes = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <MiniNav />
      <div className="registration-wrapper">
        <div className="registration-container">
          <div className="bg-warpper">
            <h3 className="slogon">
              An exciting place for the whole family to shop.
            </h3>
            <div className="img-container">
              <img
                src="https://cdn.dribbble.com/assets/auth/sign-up-2b63dbffcc69046adb0ec414be26771ce10d91a8f9b4de7c281bcbee9e95d9f9.png"
                alt="bg-img"
              />
            </div>
          </div>
          <div className="left-content-wrapper">
            <div className="link-to-login">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to={"/auth/login"}>Sign In</Link>
                </span>
              </p>
            </div>
            <div className="login-options">
              <div className="title">Sign up to Daraz</div>
              <div className="google-signup">
                <button>
                  {" "}
                  <BsGoogle /> Sign up with google
                </button>
                <div className="twitter">
                  <BsFacebook />
                </div>
                <div className="facebook">
                  <BsTwitter />
                </div>
              </div>
              <div className="or-line">
                <div></div>
                <span>OR</span>
                <div></div>
              </div>
            </div>
            <div className="form-wrapper">
              <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values: initialValuesTypes, actions) => {
                  console.log(values);
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
                        <div className="name-container">
                          <div>
                            <label>Name</label>
                            <Field
                              type="text"
                              name="fullname"
                              values={values.fullname}
                              onChange={handleChange}

                            />
                            {errors.fullname && touched.fullname ? (
                              <h3 className="error-msg">{errors.fullname}</h3>
                            ) : null}
                          </div>

                          <div>
                            <label>Username</label>

                            <Field
                              type="text"
                              name="username"
                              values={values.username}
                              onChange={handleChange}
                              className="nameField"
                            />
                            {errors.username && touched.username ? (
                              <h3 className="error-msg">{errors.username}</h3>
                            ) : null}
                          </div>
                        </div>
                        <div className="username-cont">
                          <label>Email</label>
                          <Field
                            type="text"
                            name="email"
                            values={values.email}
                            onChange={handleChange}
                          />
                          {errors.email && touched.email ? (
                            <h3 className="error-msg">{errors.email}</h3>
                          ) : null}
                        </div>

                        <div className="username-cont">
                          <label>Password</label>
                          <Field
                            type="text"
                            name="password"
                            values={values.password}
                            onChange={handleChange}
                          />
                          {errors.password && touched.password ? (
                            <h3 className="error-msg">{errors.password}</h3>
                          ) : null}
                        </div>
                        <div className="username-cont">
                          <label>Confirm Password</label>
                          <Field
                            type="text"
                            name="confirmPassword"
                            values={values.confirmPassword}
                            onChange={handleChange}
                          />
                          {errors.confirmPassword && touched.confirmPassword ? (
                            <h3 className="error-msg">
                              {errors.confirmPassword}
                            </h3>
                          ) : null}
                        </div>
                        <div className="terms-condition">
                          <input type="checkbox" />
                          <p>
                            Creating an account means you’re okay with our Terms
                            of Service, Privacy Policy, and our default
                            Notification Settings.
                          </p>
                        </div>
                        <button type="submit">Create Account</button>
                        <div className="">
                          {/* Already have an account ? <Link></Link> */}
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Register = Layout(RegisterPage);
