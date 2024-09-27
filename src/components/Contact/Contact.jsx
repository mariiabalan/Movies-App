import s from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete();
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
