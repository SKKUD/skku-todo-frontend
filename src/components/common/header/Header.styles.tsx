import styled from "@emotion/styled";

export const HeaderContainer = styled.div<{theme: string}>`
  width: 100%;
  height: 64px;
  background-color: ${props => props.theme};
  margin: auto;
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 80%;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const HeaderLogoContainer = styled.div`
  width: 200px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 40px;
  font-weight: 700;
`;

export const HeaderGatheringButton = styled.button<{textColor: string}>`
  width: 42px;
  border: none;
  color: var(--grey1, ${props => props.textColor});
  background: none;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0px;
`;

export const HeaderButtonContainer = styled.div`
  width: 200px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 17px;
  padding-right: 20px;
`;

export const HeaderButtonContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderPopoverButton = styled.button`
  border: none;
  background-color: #FFF;
`;

export const HeaderButtonContent = styled.img`
  width: 28px;
  height: 28px;
`