import { useContext } from "react";
import { MdClose } from 'react-icons/md';
import { DashContext } from "../../contexts/DashContext/DashContext";
import { StyledTitle } from "../../styles/typography";

const ContactModal = () => {
  const { handleModal } = useContext(DashContext);

  return (
    <>
      <dialog>
        <header>
          <StyledTitle tag="h2" $fontSize="three">
            Registrar novo contato
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              handleModal();
            }}>
              <MdClose size={21}/>
            </button>
        </header>
      </dialog>
    </>
  );
};

export default ContactModal;