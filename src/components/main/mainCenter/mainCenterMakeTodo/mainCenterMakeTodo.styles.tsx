import styled from "@emotion/styled";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export const MainCenterMakeTodoContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: 0.5px solid var(--grey3, #b2b2b2);
  background: #fff;
  padding-left: 30px;
  margin-left: 10px;
  padding-right: 5px;
  margin-top: -15px;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const MainCenterMakeTodoTextArea = styled(TextareaAutosize)`
  width: 90%;
  border: none;
  color: black;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  resize: none;
  padding: 0px;
  padding-left: 5px;
  border-left: 1px solid black;
`;

export const MainCenterMakeTodoButton = styled.button`
  height: 26px;
  width: 53px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  border-radius: 2px;
  background: var(--main, #00dda8);
  border: none;
`;
