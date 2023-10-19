import styled from "@emotion/styled";

export const MainRightTodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`;

export const MainRightTodoContent = styled.div`
  width: 80%;
  height: 32px;
  border-radius: 2px;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MainRightTodoCheck = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 2px;
  border: 0.5px solid #b2b2b2;
  background: #ededed;
`;

export const MainRightTodoReaction = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background: #ffdd00;
  margin-left: 10px;
`;
