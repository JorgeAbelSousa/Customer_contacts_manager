import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import { StyledButtonLink } from "../../styles/buttons";
import { StyledContainer } from "../../styles/container";
import { StyledTitle } from "../../styles/typography";
import { StyledLoginPage } from "./style";

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
      <StyledContainer containerwidth={350}>
        <div>
          <StyledTitle tag="h2" $fontSize="three" textAlign="center">
            Login
          </StyledTitle>
          <LoginForm />
          <StyledButtonLink
            to="/register"
            $buttonSize="default"
            $buttonStyle="gray"
          >
            Cadastrar
          </StyledButtonLink>
        </div>
      </StyledContainer>
    </StyledLoginPage>
  );
};

export default LoginPage;
