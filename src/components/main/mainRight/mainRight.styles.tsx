import styled from "@emotion/styled";

export const MainRightContainer = styled.div`
  width: 32%;
  max-width: 384px;
  gap: 19px;
  margin-top: 10px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 824px) {
    width: 100%;
    max-width: 420px;

  }
`;
