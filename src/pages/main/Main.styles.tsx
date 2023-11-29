import styled from "@emotion/styled";

export const MainBackground = styled.div<{ theme: string }>`
  width: 100%;
  background-color: ${(props) => props.theme};
  padding-top: 10px;
`;

export const MainContainer = styled.div`
  width: 80%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: auto;

  @media (max-width: 824px) {
    flex-direction: column;
    align-items: center;
  }
`;
