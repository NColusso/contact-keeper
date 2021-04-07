import { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length < 1) {
    return <h4>You don't have any contacts yet.</h4>;
  }

  return (
    <>
      {filtered
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))}
    </>
  );
};

export default Contacts;
