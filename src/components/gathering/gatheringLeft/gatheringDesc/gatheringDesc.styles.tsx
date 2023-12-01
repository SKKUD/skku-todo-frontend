import styled from "@emotion/styled";

export const GatheringDescContainer = styled.div`
  width: 100%;
  /* height: 450px; */
  border-radius: 9px;
  background: var(--white, #fcfcfc);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const GatheringDescTitle = styled.div`
  color: var(--black, #202020);
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export const GatheringDescLightText = styled.div`
  color: var(--grey2, #8c8c8c);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const GatheringDescText = styled.div`
  color: var(--black, #202020);
  text-align: right;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const GatheringDescBlock = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background: var(--back1, #f3f2f0);
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 14px;
`;

export const GatheringDescTop = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const GatheringDescMiddle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 36px;
`;

export const GatheringDescBottom = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GatheringEditBtn = styled.button`
  width: 24px;
  height: 24px;
  background-repeat: none;
  border: none;
  background-color: white;
`;

export const GatheringProfileImg = styled.div`
  width: 126px;
  height: 126px;
  border-radius: 8px;
`;

export const GatheringExplainWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const GatheringExplain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
