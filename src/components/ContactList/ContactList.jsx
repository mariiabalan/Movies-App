import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactlist}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;
