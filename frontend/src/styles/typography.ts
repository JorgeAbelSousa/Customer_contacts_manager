import styled, { css } from "styled-components";
import BaseTitle from "./components/BaseTitle";

interface IStyledTitleProps {
  $fontSize: "one" | "two" | "three" | "four";
  textAlign?: "center" | "left" | "right";
}

interface IStyledParagraphProps {
  fontColor?: 'gray' | 'red';
  textAlign?: "center" | "left" | "right";
}

export const StyledTitle = styled(BaseTitle)<IStyledTitleProps>`
  width: 100%;

  font-family: Inter, sans-serif;
  line-height: 1.6;

  text-align: ${({ textAlign }) => textAlign};

  ${({ $fontSize }) => {
    switch ($fontSize) {
      case "one":
        return css`
          font-size: 1.55rem;
          font-weight: 700;
        `;
      case "two":
        return css`
          font-size: 1.35rem;
          font-weight: 700;
        `;

      case "three":
        return css`
          font-size: 1.15rem;
          font-weight: 700;
        `;

      case "four":
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor }) => {
    switch (fontColor) {
      case "gray":
        return css`
          color: var();
        `;
      case "red":
        return css`
          color: var();
        `;
      default:
        return css`
          color: var();
        `;
    }
  }}

  strong {
    font-weight: 600;
  }
`;

export const StyledCaption = styled.span`
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
`;
