import styled from "@emotion/styled";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import EditIcon from "@mui/icons-material/Edit"; // edit icon
import CheckIcon from "@mui/icons-material/Check"; // check icon
import DeleteIcon from "@mui/icons-material/Delete"; // delete icon
import RoutineIcon from "../../../../assets/images/Vector.svg";

export const MainCenterTodoContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: auto;
  padding-left: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-family: "Pretendard-Regular";
  cursor: pointer;

  &:hover {
    border-radius: 2px;
    background: #f5f5f5;
    transition: all 0.3s;

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
  border: 0.5px solid #b2b2b2;
  background: #ededed;
  flex-grow: 0;
`;

export const MainCenterTodoCheckBoxChecked = styled(CheckIcon)`
  width: 17px;
  height: 17px;
  color: #00dda8;
  border-radius: 2px;
  border: 0.5px solid #b2b2b2;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCenterTodoContentRoutine = styled.img`
  background-image: url(${RoutineIcon});
  width: 7.087px;
  height: 11.34px;
  transform: rotate(30deg);
`;

export const MainCenterTodoContent = styled.div`
  width: 75%;
  color: var(--black, #2c2c2c);
  font-family: "Pretendard-Regular";
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  &.routine::before {
    content: RoutineIcon;
  }
`;

export const MainCenterTodoContentEdit = styled(TextareaAutosize)`
  width: 75%;
  border: none;
  border-bottom: 1px solid black;
  color: var(--black, #2c2c2c);
  background: #f5f5f5;
  padding: 0px;
  padding-bottom: 3px;
  resize: none;
  font-family: "Pretendard-Regular";
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

export const MainCenterTodoEditIcon = styled(EditIcon)`
  width: 15px;
  height: 15px;
`;

export const MainCenterTodoCheckIcon = styled(CheckIcon)`
  width: 15px;
  height: 15px;
`;

export const MainCenterTodoDeleteIcon = styled(DeleteIcon)`
  width: 15px;
  height: 15px;
`;

export const MainCenterTodoIconContainer = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
