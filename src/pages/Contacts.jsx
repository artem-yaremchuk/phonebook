import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectItems, selectIsLoading, selectError } from "../redux/contacts/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import Loader from "../components/Loader/Loader";
import Notiflix from "notiflix";

const Contacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    Notiflix.Notify.failure("Oooops, something went wrong...");
  }

  return (
    <div>
      <h1
        style={{
          fontSize: 36,
          fontWeight: 600,
          lineHeight: "1.1",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#2E2F42",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          fontSize: 32,
          fontWeight: 500,
          lineHeight: "1.5",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#2E2F42",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {items.length > 0 && <ContactList />}
    </div>
  );
};

export default Contacts;
