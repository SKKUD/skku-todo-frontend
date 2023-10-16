import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const DropDownContainer = styled.div<{open: boolean}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 50px;
  right: -5px;
  z-index: 200;

  opacity: ${props => (props.open ? "1" : "0")};
  height: ${props => (!props.open && "0")};
  overflow: hidden;
  transition: all 0.4s;
`;

export const DropDownAlertContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  background: var(--background, #EBEAE5);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.20);
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const DropDownAlert = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 70px;
  border-radius: 4px;
  background: var(--white, #FCFCFC);
  margin: auto;
`

export const DropDownAlertContent = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const DropDownAlertDate = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: var(--grey2, #8C8C8C);
  font-family: "Pretendard-Regular";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.2px;
`;
