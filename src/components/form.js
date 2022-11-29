import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
/***
 * To do's
 *  1.create a form 
 *  2.Validate the form
 *  3.Login the user
 *  4.Save the credentials 
 *  5.Re. auth the user every 3 mints if no use not active
 *  6.Logout user
 */
function FormCompounent(props) {
  const [Loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState([]);

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Please provide your email"),
    password: Yup.string().required("Please provide a password"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    
    console.log(values);
  };

  return Loading ? (
    "Loading..."
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            type="email"
            name="email"
            id="inputEmail"
            autoComplete="off"
            className="form-control"
            title="Email"
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field
            type="password"
            name="password"
            id="inputPassword"
            className="form-control"
            title="Password"
          />
          {errors.email && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormCompounent;
