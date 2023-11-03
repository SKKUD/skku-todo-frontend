import styled from "@emotion/styled";

export const MainCenterGoalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 20px;
`

// Goal Container
export const MainCenterGoalContainer = styled.div<{lightBgColor: string}>`
  width: 95%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background: var(--back1, ${props => props.lightBgColor});
  margin: auto;
  font-family: "Pretendard-Regular";
  padding-right: 5px;

  .makegoal_container {
    display: none;
    opacity: 0;
    transition: all 0.3s;
  }
`;

export const MainCenterGoalNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

export const MainCenterGoalNameDash = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--grey2, #8C8C8C);
  border-radius: 50%;
  margin-right: 8px;
`;

export const MainCenterGoalName = styled.div<{textColor: string}>`
  text-align: left;
  color: ${props => props.textColor};
`;

export const MainCenterGoalAddButton = styled.img`
  width: 16px;
  height: 16px;

  &:hover {
    width: 20px;
    height: 20px;
    transition: all 0.3s;
  }
`;

// Todo List
export const MainCenterGoalTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
