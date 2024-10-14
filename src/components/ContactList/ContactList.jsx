// import Contact from "../Contact/Contact";
// import s from "./ContactList.module.css";
// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={s.contactlist}>
//       {contacts.map((contact) => (
//         <Contact
//           key={contact.id}
//           name={contact.name}
//           number={contact.number}
//           onDelete={() => onDeleteContact(contact.id)}
//         />
//       ))}
//     </ul>
//   );
// };
// export default ContactList;

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={s.contactlist}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
