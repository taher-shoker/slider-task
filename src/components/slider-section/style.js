import styled from "styled-components";

export const WarperContainer = styled.div`
  max-width: 100%;
  height: 100%;
  margin-left: 80px;
  margin-right: 80px;
  @media only screen and (max-width: 1280px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 32px;
    margin-right: 32px;
  }
  @media only screen and (max-width: 375px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 42px 0;
`;
export const Title = styled.h1`
  font-size: 56px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.light};
  margin: 0;
`;
export const PreButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.light};
  font-size: 12px;
  border-radius: 100px;
  font-weight: 700;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  padding: 12px 32px;
  width: 131px;
  height: 43px;
  @media only screen and (max-width: 375px) {
    margin-top: 16px;
  }
`;
