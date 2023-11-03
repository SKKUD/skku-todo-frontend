import styled from "@emotion/styled";

export const MainCenterContainer = styled.div<{backgroundColor: string}>`
  width: 32%;
  max-width: 384px;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  border-radius: 15px;
  gap: 15px;
  margin-top: 10px;
  padding-bottom: 30px;
  padding-top: 10px;
  font-family: "Pretendard-Regular";
`;
