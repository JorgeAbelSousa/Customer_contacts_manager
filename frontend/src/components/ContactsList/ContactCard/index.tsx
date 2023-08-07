import { iContact } from "../../../contexts/DashContext/@types";
import { DashContext } from "../../../contexts/DashContext/DashContext";

const ContactCard = ({ id, fullName, email, phoneNumber }: iContact) => {
  const { handleModal } = useContext(DashContext);

  return (
    <div>
      
    </div>
  )
}

export default ContactCard;