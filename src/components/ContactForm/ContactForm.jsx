import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as yup from "yup";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    usernumber: "",
  };
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Name is required")
      .min(3, "Name is too short")
      .max(50, "Name is too long"),
    usernumber: yup
      .string()
      .required("Number is required")
      .min(3, "Number is too short")
      .max(50, "Number is too long"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: Date.now(),
        name: values.username,
        number: values.usernumber,
      })
    );
    resetForm();
  };

  return (
    <div className={s.formcontainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.formlabel}>
            Name
            <Field name="username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </label>
          <label className={s.formlabel}>
            Number
            <Field name="usernumber" />
            <ErrorMessage
              name="usernumber"
              component="div"
              style={{ color: "red" }}
            />
          </label>
          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactsForm;
