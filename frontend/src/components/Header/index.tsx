import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { StyledHeader } from "./style";

const Header = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <StyledHeader>
      <h2 className="logo">CCM</h2>
      <nav role="navigation">
        <button type="button">
          <MdLogout size={28} onclick={() => userLogout()} />
        </button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
