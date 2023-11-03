import styled from "@emotion/styled";

export const MainBackground = styled.div<{ theme: string }>`
  width: 100%;
  background-color: ${props => props.theme};
  padding-top: 10px;
`;

export const MainContainer = styled.div`
  width: 80%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: auto;
`