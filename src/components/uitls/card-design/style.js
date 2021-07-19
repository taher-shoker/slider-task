import styled from "styled-components";

export const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const CardInfo = styled.div`
  background-color: ${(props) => props.theme.dark};
  padding: 24px;
  color: ${(props) => props.theme.light};
  display: flex;
  flex-direction: column;
`;
export const TopPart = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.a`
  color: ${(props) => props.theme.light};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 18px;
  line-height: 28.8px;
`;
export const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Description = styled.p`
  color: ${(props) => props.theme.light};
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px;
  line-height: 22.4px;
`;
export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
export const Owner = styled.div`
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 19.2px;
  text-transform: capitalize;
  text-align: left;
  color: ${(props) => props.theme.light};
`;
export const Date = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 22.4px;
  letter-spacing: normal;
  text-align: right;
  color: ${(props) => props.theme.light};
`;
export const Number = styled.div`
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.theme.light};

`;
export const Line = styled.div`
  width: 100%;
  margin: 24px auto;
  height: 1px;
  background-color: ${(props) => props.theme.light};

`;

export const VoteButton = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  padding: 12px 24px;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.light};
  background-color: ${(props) => props.theme.secondary};
  width: 80px;
  height: 43px;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
`;
