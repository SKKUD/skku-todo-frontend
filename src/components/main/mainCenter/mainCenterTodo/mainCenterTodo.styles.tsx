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
  font-family: "Pretendard-Regular";

  &:hover {
    .todo_function_container {
      display: flex;
      opacity: 1;
    }
  }
`;

export const MainCenterTodoCheckBox = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 2px;
  border: 0.5px solid #B2B2B2;
  background: #EDEDED;
  flex-grow: 0;
`;

export const MainCenterTodoCheckBoxChecked = styled.img`
  width: 17px;
  height: 17px;
  border-radius: 2px;
  border: 0.5px solid #B2B2B2;
  background: #EDEDED;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const MainCenterTodoContent = styled.div`
  width: 75%;
  color: var(--black, #2C2C2C);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MainCenterTodoButtonContainer = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

export const MainCenterTodoIconContainer = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;