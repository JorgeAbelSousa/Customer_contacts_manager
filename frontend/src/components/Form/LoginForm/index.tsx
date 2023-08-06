import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iLoginFormValues } from "../../../contexts/UserContext/@types";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledForm } from "../../../styles/form";
import Input from "../../Input";


const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>();

  const submit: SubmitHandler<iLoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <StyledButton $buttonSize="default" $buttonStyle="purple">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
