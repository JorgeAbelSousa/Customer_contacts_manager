import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";
import { StyledTitle } from "../../styles/typography";
import { StyledRegisterPage } from "./style";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <StyledRegisterPage>
      <div className="central_content">
        <header>
          <StyledTitle tag="h1" $fontSize="three">
            Cadastro
          </StyledTitle>
          <Link to="/login">Já tenho cadastro</Link>
        </header>

        <RegisterForm />
      </div>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
