import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    username: "",
    usernumber: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Name is required")
      .min(3, "Name is too short")
      .max(50, "Name is too long"),
    usernumber: Yup.string()
      .required("Number is required")
      .min(3, "Number is too short")
      .max(50, "Number is too long"),
  });
  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    };
    onAddContact(newContact);
    console.log(values.username, values.usernumber);
    options.resetForm();
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
          <label>
            Number
            <Field name="usernumber"></Field>
            <ErrorMessage
              name="usernumber"
              component="div"
              style={{ color: "red" }}
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
