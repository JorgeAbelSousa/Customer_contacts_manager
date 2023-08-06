import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { iRegisterFormValues } from "../../../contexts/UserContext/@types";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledForm } from "../../../styles/form";
import Input from "../../Input";

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>();

  const submit: SubmitHandler<iRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome completo"
        type="text"
        register={register("fullName")}
        error={errors.fullName}
      />
      <Input
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <Input
        label="Confirme sua senha"
        type="password"
        register={register("password")}
      />
      <Input label="Telefone" type="text" register={register("phoneNumber")} />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
