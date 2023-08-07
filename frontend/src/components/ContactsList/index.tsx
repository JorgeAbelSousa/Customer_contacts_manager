import { useContext } from "react";
import { DashContext } from "../../contexts/DashContext/DashContext";
import ContactCard from "./ContactCard";
import { StyledContactsList } from "./style";

const ContactsList = () => {
  const { contacts } = useContext(DashContext);

  return (
    <StyledContactsList>
      {
        contacts.length > 0 ? contacts.map((contact) => (
          <ContactCard 
            key={contact.id}
            id={contact.id}
            fullName={contact.fullName}
            email={contact.email}
            phoneNumber={contact.phoneNumber}
          />
        ))
        :
        <div>Adicione seus contatos</div>
      }
    </StyledContactsList>
  );
};

export default ContactsList;