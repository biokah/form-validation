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
      email: "",
      password: "",
      confirmPassword: "",
      edad:""
      
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
    <div className="form-wrapper bg-violet-400 absolute top-1/2 left-1/2 rounded p-4 r">
      <h1 className="text-2xl font-bold text-white text-center mb-3">Sign Up</h1>
      <form 
        className="" 
        onSubmit={formik.handleSubmit}>
        <article className="relative">
          <input
            placeholder="First Name"
            className="rounded px-2 py-1 w-full mb-5"
            value={formik.values.firstName}
            onChange={(e) => setInputValue("firstName", e.target.value)}
          />
          <span className="text-white text-xs absolute left-0 bottom-0">{formik.errors.firstName}</span>
        </article>   
        <article className="relative">
            <input
              className="rounded px-2 py-1 w-full mb-5"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={(e) => setInputValue("lastName", e.target.value)}
            />
            <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.lastName}</span>
          </article>
          <article className="relative">
          <input
            className="rounded px-2 py-1 w-full mb-5"
            placeholder="Email"
            value={formik.values.email}
            onChange={(e) => setInputValue("email", e.target.value)}
          />
          <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.email}</span>
          </article>
          <article className="relative">
          <input
            className="rounded px-2 py-1 w-full mb-5"
            placeholder="Password"
            value={formik.values.confirm}
            onChange={(e) => setInputValue("password", e.target.value)}
          />
          <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.password}</span>
          </article>
          <article className="relative">
          <input
            className="rounded px-2 py-1 w-full mb-5"
            placeholder="Confirm Password"
            value={formik.values.confirm}
            onChange={(e) => setInputValue("confirmPassword", e.target.value)}
          />
          <span className="text-white text-left text-xs absolute left-0 bottom-0">{formik.errors.confirmPassword}</span>
          </article>
          <article className="relative">
          <input
            placeholder="Edad"
            className="rounded px-2 py-1 w-full mb-5"
            value={formik.values.edad}
            onChange={(e) => setInputValue("edad", e.target.value)}
          />
          <span className="text-white text-xs absolute left-0 bottom-0">{formik.errors.edad}</span>
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