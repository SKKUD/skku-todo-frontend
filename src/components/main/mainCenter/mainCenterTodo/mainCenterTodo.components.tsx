import React from "react";

import { 
  MainCenterTodoContainer,
  MainCenterTodoCheckBox,
  MainCenterTodoContent,
} from "./mainCenterTodo.styles";
const MainCenterTodo = () => {
  return (
    <MainCenterTodoContainer>
      <MainCenterTodoCheckBox />
      <MainCenterTodoContent>문화산업과데이터분석 5주차 강의 듣기</MainCenterTodoContent>
    </MainCenterTodoContainer>
  )
}

export default MainCenterTodo;