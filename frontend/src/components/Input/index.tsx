import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledParagraph } from "../../styles/typography";
import { StyledTextField } from "../../styles/form";

interface iImputProps {
  label: string;
  type: "text" | "password" | "email";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, type, register, error }: iImputProps) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {error ? (
      <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
    ) : null}
  </fieldset>
);

export default Input;
