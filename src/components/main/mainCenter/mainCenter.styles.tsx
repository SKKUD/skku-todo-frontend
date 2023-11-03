import styled from "@emotion/styled";

export const MainCenterContainer = styled.div<{backgroundColor: string}>`
  width: 39%;
  max-width: 486px;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  border-radius: 15px;
  gap: 15px;
  margin-top: 10px;
  padding-bottom: 30px;
  padding-top: 10px;
  font-family: "Pretendard-Regular";

  @media (max-width: 824px) {
    width: 100%;
    max-width: 420px;
  }
`;
