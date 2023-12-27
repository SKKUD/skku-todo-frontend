import styled from "@emotion/styled";

export const GatheringLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  height: 59vh;
  background: var(--white, #fcfcfc);
`;

export const GatheringLinkTitle = styled.div`
  color: var(--black, #202020);
  text-align: center;
  font-family: "Pretendard";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
  margin-top: 50px;
`;

export const GatheringLinkContent = styled.div`
  color: var(--grey2, #8c8c8c);
  text-align: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const GatheringLinkWrapper = styled.div`
  margin-top: 70px;
  gap: 6px;
`;
export const GatheringLinkLabel = styled.div`
  color: var(--grey2, #8c8c8c);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const GatheringLinkField = styled.div`
  width: 486px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid var(--grey3, #b2b2b2);
  background: var(--white, #fcfcfc);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  color: var(--black, #202020);
  text-align: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CopyIcon = styled.img`
  margin-right: 8px;
  :hover {
    width: 33px;
  }
`;
