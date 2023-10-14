import styled from "@emotion/styled";

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CheckIcon from '@mui/icons-material/Check';

export const MainCenterMakeGoalContainer = styled.div`
  transition: all 0.3s;
  width: 95%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background: var(--back1, #F3F2F0);
  margin: auto;
  font-family: "Pretendard-Regular";
  padding-right: 5px;
`;

export const MainCenterMakeGoalTextArea = styled(TextareaAutosize)`
  text-align: left;
  border: none;
  color: var(--black, #2C2C2C);
  background: var(--back1, #F3F2F0);
  padding: 0px;
  padding-bottom: 3px;
  resize: none;
  font-family: "Pretendard-Regular";
  /* font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px; */
`

export const MainCenterMakeGoalDone = styled(CheckIcon)`
  width: 16px;
  height: 16px;
`