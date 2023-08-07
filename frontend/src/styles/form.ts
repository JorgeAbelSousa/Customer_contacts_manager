import { TextField } from "@mui/material";
import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: Inter, sans-serif;
  }

  label {
    &.Mui-focused {
      color: ${({theme}) => theme.colors.primary};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({theme}) => theme.colors.primary};
      outline-color: ${({theme}) => theme.colors.primary};
    }
  }
`;
