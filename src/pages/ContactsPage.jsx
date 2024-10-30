import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../redux/contacts/selectors";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import { PacmanLoader } from "react-spinners";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Phonebook loaded successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to load contacts: ${error.message}`);
      });
  }, [dispatch]);

  // Стилі для компонента
  const pageStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
  };

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  };

  const errorStyle = {
    color: "red",
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Phonebook</h1>
      <p>
        Welcome to our Phonebook app! Easily manage your contacts by adding or
        deleting them, ensuring you always have access to your important
        information!
      </p>

      <ContactForm />
      <SearchBox />

      {isLoading && (
        <div style={loaderStyle}>
          <PacmanLoader color="#578f46" />
          <p>Loading contacts...</p>
        </div>
      )}
      {isError && <p style={errorStyle}>Error: {isError}</p>}

      {contacts.length > 0 ? <ContactList /> : <p>No contacts available.</p>}
    </div>
  );
};

export default ContactsPage;
