import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const MainLeftTodayMemoSizePopOverContainer = styled.div`
  background-color: #FFF;
  width: 105px;
  height: 120px;
  display: flex;
  flex-direction: column;
  > :first-of-type {
    border-bottom: 0.3px solid #808080;
  }
  > :nth-of-type(2) {
    border-bottom: 0.3px solid #808080;
  }
`;

export const MainLeftTodayMemoSizePopOverInner = styled(Button)`
  width: 105px;
  height: 40px;
  color: #808080;
  font-family: "Pretendard-Regular";
  text-align: center;
  line-height: 40px;
  border-radius: 0px;
`;