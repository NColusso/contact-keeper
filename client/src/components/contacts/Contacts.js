import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length < 1) {
    return <h4>You don't have any contacts.</h4>;
  }

  return (
    <>
      <TransitionGroup>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={300} classNames="item">
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={300} classNames="item">
                <ContactItem contact={contact}></ContactItem>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
};

export default Contacts;
