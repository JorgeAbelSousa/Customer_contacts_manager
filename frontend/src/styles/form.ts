import { TextField } from "@mui/material";
import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: Inter, sans-serif;
  }

  label {
    &.Mui-focused {
      color: var();
    }
  }

  .Mui-focused {
    fieldset {
      border-color: var();
      outline-color: var();
    }
  }
`;
