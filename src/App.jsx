import { useDispatch, useSelector } from "react-redux";
import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoading, selectIsError } from "./redux/contactsSlice";
import s from "./App.module.css";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  return (
    <div className={s.appcontainer}>
      <SearchBox />
      <ContactsForm />
      {isLoading && <h2 className={s.loadingmessage}>Loading...</h2>}
      {isError && <h2 className={s.errormessage}>Ups...</h2>}
      <ContactList />
    </div>
  );
};

export default App;
