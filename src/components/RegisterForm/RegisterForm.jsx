import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import s from "./RegisterForm.module.css";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, options) => {
    try {
      const resultAction = await dispatch(register(values));

      const res = resultAction.unwrap ? resultAction.unwrap() : resultAction;

      if (res && res.user) {
        toast(`Welcome, ${res.user.name}!`);
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }

    options.resetForm();
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Register</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={s.form}>
            <div className={s.fieldContainer}>
              <label htmlFor="name" className={s.label}>
                Name:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={s.input}
                required
              />
            </div>
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
                autoComplete="email"
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
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className={s.submitButton}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
