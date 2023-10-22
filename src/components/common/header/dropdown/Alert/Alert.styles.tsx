import styled from "@emotion/styled";

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 70px;
  border-radius: 4px;
  background: var(--white, #FCFCFC);
  margin: auto;
`

export const AlertContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const AlertContentProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  margin: 0px;

`;

export const AlertContentText = styled.div`
  color: var(--black, #2C2C2C);
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;


export const AlertDate = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5px;
  color: var(--grey2, #8C8C8C);
  text-align: right;
  font-family: "Pretendard-Regular";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.2px;
`;
