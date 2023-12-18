import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Signup data:", values);
    setSubmitting(false);
  };

  return (
    <main className="authPage">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="formWrapper">
          <div className="logo">
            <Link to="/">
              <img
                src="/assets/img/logo/Grape Detection System (500 × 200 px) (500 × 130 px).png"
                style={{ height: "60px" }}
                alt=""
              />
            </Link>
          </div>
          <Form className="loginForm">
            <div className="mb-4">
              <Field
                type="text"
                className="inputField"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
              <ErrorMessage
                className="fieldError"
                name="firstName"
                component="div"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                className="inputField"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
              <ErrorMessage
                className="fieldError"
                name="lastName"
                component="div"
              />
            </div>

            <div className="mb-4">
              <Field
                type="email"
                className="inputField"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                className="fieldError"
                name="email"
                component="div"
              />
            </div>

            <div>
              <Field
                type="password"
                className="inputField"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                className="fieldError"
                name="password"
                component="div"
              />
            </div>

            <button className="authSubmitBtn mt-5" type="submit">
              Register
            </button>
            <p className="text-center mt-3" style={{ fontSize: "14px" }}>
              Already have an account?
              <Link
                to="/login"
                style={{ color: "#9266cc", paddingLeft: "3px" }}
              >
                Login here
              </Link>
            </p>
          </Form>
        </div>
      </Formik>
    </main>
  );
};

export default Signup;
