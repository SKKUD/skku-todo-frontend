import React from "react";

import {
  MainRightTodoContent,
  MainRightTodoContentContainer,
  MainRightTodoContainer,
  MainRightTodoCheck,
  MainRightTodoReaction,
} from "./mainRightTodo.styles";

import { 
  MainCenterTodoCheckBox,
  MainCenterTodoCheckBoxChecked,
} from "../../../mainCenter/mainCenterTodo/mainCenterTodo.styles";
interface IMainRightTodo {
  // isChecked?: boolean;
  content: string;
}

const MainRightTodo = ({content}: IMainRightTodo) => {

  return (
    <MainRightTodoContainer>
      {/* todo content */}
      <MainRightTodoContentContainer>
        <MainCenterTodoCheckBox />
        <MainRightTodoContent>{content}</MainRightTodoContent>
      </MainRightTodoContentContainer>

      {/* Reaction */}
      <MainRightTodoReaction />
    </MainRightTodoContainer>
  );
};

export default MainRightTodo;
