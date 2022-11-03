import React from "react";
import { Formik, Field } from "formik";
import styles from "./form.module.css";



export const Login = () => {
  return (
    <>
      <Formik
        initialValues={{ 
          username: "", 
          password: "",
          cpassword: "",
          stack: "",
          email: ""
        }}


        //validate
        validate={(values) =>{
          const {username, password, cpassword, stack, email} = values;
          const errors = {};
          if(!username) errors.username = "Username cannot be empty"
          if(!password) errors.password = "Password cannot be empty"
          if(!cpassword) errors.cpassword = "Must confirm password"
          if(!stack) errors.stack = "Stack cannot be empty"
          if(!email) errors.email = "Email cannot be empty"
          return errors;
        }}
        
        onSubmit={(values, { setSubmitting }) => {
          const { username, password, cpassword, stack, email} = values;

          setSubmitting(true);
          console.log("submitting form");
          console.log(`${username} - ${password} -${cpassword} -${email} and your stack is ${stack}` );

          setTimeout(() => {
            setSubmitting(false);
            console.log("form submitted");
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <React.Fragment>
            {/* show username and password */}
            
            <pre>{JSON.stringify(values, 2, null)}</pre>
            <form>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Enter Username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && touched.username && <p>{errors.username}</p>}
              
              <input
                className={styles.inputBox}
                type="password"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
               {errors.password && touched.password && <p>{errors.password}</p>}

               <input
                className={styles.inputBox}
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                value={values.cpassword}
                onChange={handleChange}
              />
               {errors.cpassword && touched.cpassword && <p>{errors.cpassword}</p>}
              

               <input
                className={styles.inputBox}
                type="email"
                placeholder="Enter Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
               {errors.email && touched.email && <p>{errors.error}</p>}
              

              <Field as='select' name='stack' className={styles.stack}>
                <option value="">Select Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="devops">Devops</option>
              </Field>
              {errors.stack && touched.stack && <p>{errors.stack}</p>}
              
              <button
                className={styles.btn}
                disabled={isSubmitting}
                type="button"
                onClick={handleSubmit}
              >
                {isSubmitting ? "Loading" : "Login"}
              </button>

              {/* Reset form */}
              <button className={styles.btn} type='reset' onClick={handleReset}>
                    Reset Form
              </button>
            </form>

            {isSubmitting ? (
              <h3>Form is submitting, please don't close the window!</h3>
            ) : null}

            {/* show username and password */}
            {values.username && <p> Your username is: {values.username}</p>}
            {values.password && (
              <p> Your password is: {values.password.slice(0, 3)}***</p>
            )}

          </React.Fragment>
        )}
      </Formik>
    </>
  );
};
