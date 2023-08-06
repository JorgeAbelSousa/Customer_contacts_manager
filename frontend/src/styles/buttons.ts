import styled, { css } from "styled-components";

interface IStyledButtonProps {
  $buttonSize: "default" | "medium";
  $buttonStyle: "purple" | "gray";
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 1rem;

  border-radius: 10px;

  transition: 0.5s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case "default":
        return css`
          padding: 0 30px;
          height: 60px;
        `;
      case "medium":
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ $buttonStyle }) => {
    switch ($buttonStyle) {
      case "purple":
        return css`
          color: var();
          background: var();
          &hover {
            opacity: 0.5;
          }
        `;
      case "gray":
        return css`
          color: var();
          background: var();
          &hover {
            color: var();
            background: var();
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;
