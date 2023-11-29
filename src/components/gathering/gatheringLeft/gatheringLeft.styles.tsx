import styled from "@emotion/styled";

export const GatheringContainer = styled.div`
  width: 65%;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GatheringTop = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const NavigateToMainBtn = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border: none;
  background-size: contain;
  &:hover {
    width: 34px;
    height: 34px;
  }
`;

export const AboutTown = styled.div`
  color: var(--grey2, #8c8c8c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-right: 4px;
`;

export const AboutIcon = styled.img`
  width: 32px;
  height: 32px;
  &:hover {
    width: 33px;
    height: 33px;
  }
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
