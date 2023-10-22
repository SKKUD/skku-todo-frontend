import styled from "@emotion/styled";

export const ReactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

`;

export const ReactionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  gap: 5px;
`;

export const ReactionHeaderTitle = styled.h1`
  color: var(--black, #2C2C2C);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
  margin: 0px;
`;

export const ReactionHeaderContent = styled.p`
  color: var(--grey2, #8C8C8C);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0px;
`;

export const ReactionPointIcon = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
`;

export const ReactionLimitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 40px;
`
export const ReactionLimit = styled.h2`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0px;
`;

export const ReactionLimitDescription = styled.p`
  color: #A8A7A7;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin: 0px;
`;

export const ReactionButton = styled.button`
  width: 186px;
  height: 55px;
  border-radius: 8px;
  background: var(--main, #00DDA8);
  color: white;
  border: none;
  color: var(--white, #FCFCFC);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
`;
