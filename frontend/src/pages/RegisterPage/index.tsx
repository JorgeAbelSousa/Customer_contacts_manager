import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm";
import { StyledContainer, StyledGridBox } from "../../styles/container";
import { StyledTitle } from "../../styles/typography";
import { StyledRegisterPage } from "./style";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      navigate("/dash");
    }
  }, []);

  return (
    <StyledRegisterPage>
      <StyledContainer containerwidth={350}>
        <StyledGridBox>
          <header>
            <StyledTitle tag="h1" $fontSize="three" textAlign="center">
              Cadastro
            </StyledTitle>
            <Link to="/">Já tenho cadastro</Link>
          </header>
          <RegisterForm />
        </StyledGridBox>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
