import styled from "styled-components";

interface iStyledContainerProps {
  containerwidth?: number;
}

export const StyledContainer = styled.div<iStyledContainerProps>`
  width: 60%;
  height: contain;
  border-radius: 20px;
  max-width: ${({ containerwidth }) => 
    containerwidth ? containerwidth : 1000}px;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 0px 4px 0px ${({theme}) => theme.colors.gray300};
`;

export const StyledGridBox = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 5px
  }
`