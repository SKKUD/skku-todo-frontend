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
  width: 85%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const HeaderLogoContainer = styled.img`
  width: 200px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 40px;
  font-weight: 700;
`;

export const HeaderGatheringButton = styled.img`
  width: 28px;
  height: 28px;
  border: none;
  background: none;
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

export const HeaderPopoverButton = styled.button<{backgroundColor: string}>`
  border: none;
  background-color: ${props => props.backgroundColor};
`;

export const HeaderButtonContent = styled.img`
  width: 28px;
  height: 28px;
`