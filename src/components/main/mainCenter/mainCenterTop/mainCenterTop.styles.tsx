import styled from "@emotion/styled";

export const MainCenterTopContainer = styled.div`
  width: 95%;
  height: 42px;
  padding-left: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const MainCenterTopMyTodo = styled.div<{textColor: string}>`
  color: ${props => props.textColor};
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const MainCenterTopAddGoal = styled.div<{lightBgColor: string, textColor: string}>`
  width: 76px;
  height: 27px;
  border-radius: 2px;
  background: var(--background, #5DC2AA);
  color: #FCFCFC;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  cursor: pointer;
  &:hover {

  }
`;
