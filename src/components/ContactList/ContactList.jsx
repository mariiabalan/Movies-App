import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContactsThunk } from "../../redux/contactsOps";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.contactlist}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContactsThunk(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
