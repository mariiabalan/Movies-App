import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContacts, fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactlist}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContacts(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
