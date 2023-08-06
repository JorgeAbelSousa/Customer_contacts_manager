import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/container";
import { StyledTitle } from "../../styles/typography";
import { StyledLoginPage } from "./style";
import LoginForm from "../../components/Form/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      navigate("/dash");
    }
  }, []);

  return (
    <StyledLoginPage>
      <StyledContainer>
        <div>
          <StyledTitle tag="h2" $fontSize="three">
            Login
          </StyledTitle>
          <LoginForm />
          <button></button>
        </div>
      </StyledContainer>
    </StyledLoginPage>
  );
};

export default LoginPage;
