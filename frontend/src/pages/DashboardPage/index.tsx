import { useContext } from "react";
import ContactModal from "../../components/ContactModal";
import Header from "../../components/Header";
import { DashContext } from "../../contexts/DashContext/DashContext";
import { StyledContainer } from "../../styles/container";
import { StyledDashPage } from "./style";

const DashPage = () => {
  const { modal } = useContext(DashContext);
  return (
    <StyledDashPage>
      {modal === true ? <ContactModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
        </StyledContainer>
      </main>
    </StyledDashPage>
  );
};

export default DashPage;
