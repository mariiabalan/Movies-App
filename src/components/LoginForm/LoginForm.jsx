import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options
      .resetForm()
      .unwrap()
      .then((res) => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error("invalid credentials");
      });
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Login Page</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={s.form}>
            <div className={s.fieldContainer}>
              <label htmlFor="email" className={s.label}>
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={s.input}
                required
              />
            </div>
            <div className={s.fieldContainer}>
              <label htmlFor="password" className={s.label}>
                Password:
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className={s.input}
                required
              />
            </div>
            <button type="submit" className={s.submitButton}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
