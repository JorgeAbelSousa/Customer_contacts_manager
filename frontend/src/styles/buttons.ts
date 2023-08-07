import { Link } from "react-router-dom";
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

  border-radius: 8px;

  transition: 0.5s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case "default":
        return css`
          padding: 0 30px;
          height: 60px;
          width: 100%;
        `;
      case "medium":
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case "gray":
        return css`
          color: ${theme.colors.gray300};
          background: ${theme.colors.gray100};
          &:hover {
            color: ${theme.colors.gray100};
            background: ${theme.colors.gray300};
          }
        `;
      case "purple":
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.primary};
          &:hover {
            color: ${theme.colors.gray600};
            background: ${theme.colors.secondary};
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;
