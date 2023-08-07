import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.gray0};
  box-shadow: 0px 0px 20px -10px ${({ theme }) => theme.colors.gray300};
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 100vw;
  height: 60px;

  .logo {
    max-width: 160px;
    align-self: center;
    color: ${({ theme }) => theme.colors.primary};
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      button {
        background: transparent;
        transition: 0.3s;

        :hover {
          color: ${({ theme }) => theme.colors.gray300};
        }
      }
    }
  }
`;
