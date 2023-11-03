import styled from "@emotion/styled";

export const MainLeftProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const MainLeftProfileContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 8px 8px 0px 0px;
  background: var(--white, #FCFCFC);
  padding-top: 15px;
  padding-left: 8px;
  padding-bottom: 5px;
`;

export const MainLeftProfilePhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 5px;
`

export const MainLeftProfileHello = styled.div<{textColor: string}>`
  height: 42px;
  display: flex;
  color: var(--grey1, #5F5F5F);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`

export const MainLeftProfileGraphicContainer = styled.div`
  height: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ED0B9;
  border-radius: 0px 0px 8px 8px;
`;

export const MainLeftProfileGraphic = styled.img`
  width: 172px;
  height: 159px;
  
`;

