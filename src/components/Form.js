import React, { useCallback } from "react";
import { useFormik } from "formik";
import schema from './../schemas/loginSchema'

const Form = () => {

  const handleOnSubmit = (values) => {
    console.log(values)
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: ""
      
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <div className="form-wrapper bg-blue-400 absolute top-1/2 left-1/2 rounded p-4 r">
      <h1 className="text-2xl font-bold text-white text-center mb-3">Sign Up</h1>
      <form 
        className="" 
        onSubmit={formik.handleSubmit}>
        <article className="relative">
          <input
          name="firstName"
          id="firstName"
            placeholder="First Name"
            className="rounded px-2 py-1 w-full mb-5"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <span className="text-white text-xs absolute left-0 bottom-0">{formik.errors.firstName}</span>
        </article>   
        <article className="relative">
            <input
              name="lastName"
              id="lastName"
              className="rounded px-2 py-1 w-full mb-5"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.lastName}</span>
          </article>
          <article className="relative">
          <input
          name="email"
          id="email"
            className="rounded px-2 py-1 w-full mb-5"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.email}</span>
          </article>
          <article className="relative">
          <input
          name="password"
          id="password"
            className="rounded px-2 py-1 w-full mb-5"
            placeholder="Password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
          />
          <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.password}</span>
          </article>
          <article className="relative">
          <input
          name="confirm"
          id="confirm"
            className="rounded px-2 py-1 w-full mb-5"
            placeholder="Confirm Password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
          />
          <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.confirmPassword}</span>
          </article>
          <article className="relative">
          <input
          name="age"
          id="age"
            placeholder="Age"
            className="rounded px-2 py-1 w-full mb-5"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          <span className="text-white text-xs absolute left-0 bottom-0">{formik.errors.age}</span>
        </article> 
          
        <button className={`w-full rounded py-1 ${!formik.isValid ? 'bg-gray-200' : 'bg-white'}`}
        type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form