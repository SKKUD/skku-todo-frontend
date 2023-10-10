import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
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
  background-color: black;
`;

export const HeaderButtonContainer = styled.div`
  width: 200px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding-right: 20px;
`;

export const HeaderButtonContent = styled.img`
  width: 28px;
  height: 28px;
`