import styled from "@emotion/styled";

export const MainCenterTodoContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: auto;
  padding-left: 15px;
`;

export const MainCenterTodoCheckBox = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 2px;
  border: 0.5px solid #B2B2B2;
  background: #EDEDED;
`;

export const MainCenterTodoContent = styled.div`
  width: 296px;
  color: var(--black, #2C2C2C);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;
