import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as yup from "yup";
import { addContacts } from "../../redux/contacts/operations";

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
    dispatch(addContacts(values));
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
            <Field name="username" className={s.inputField} />
            <ErrorMessage
              name="username"
              component="div"
              className={s.errorMessage}
            />
          </label>
          <label className={s.formlabel}>
            Number
            <Field name="usernumber" className={s.inputField} />
            <ErrorMessage
              name="usernumber"
              component="div"
              className={s.errorMessage}
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
