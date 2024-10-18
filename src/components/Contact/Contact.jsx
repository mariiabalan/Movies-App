import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContactsThunk } from "../../redux/contactsOps";

import { CiUser } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <li className={s.contactlist}>
      <div className={s.contactInfo}>
        <div className={s.contactDetails}>
          <div className={s.nameInfo}>
            <CiUser className={s.icon} />
            <span className={s.contactName}>{name}</span>
          </div>

          <div className={s.phoneInfo}>
            <HiOutlinePhone className={s.icon} />
            <span className={s.contactNumber}>{number}</span>
          </div>
        </div>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
