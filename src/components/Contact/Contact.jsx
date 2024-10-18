import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContactsThunk } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <li className={s.contactlist}>
      {name}: {number}
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
