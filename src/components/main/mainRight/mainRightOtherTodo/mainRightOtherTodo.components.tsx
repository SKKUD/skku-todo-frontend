import React from "react";
import MainRightGoal from "./mainRightGoal/mainRightGoal.components";

import { 
  MainRightOtherTodoContainer,
  MainRightOtherTodoTitle
} from "./mainRightOtherTodo.styles";

const MainRightOtherTodo = () => {
  let dummyTodo1: string[] = [
    "문화산업데이터분석 5주차 강의 듣기",
    "문화산업데이터분석 1주차 강의 듣기",
    "문화산업데이터분석 5주차 강의 듣기 두줄두줄두줄두줄두줄두줄두줄두줄",
  ];

  let dummyTodo2: string[] = ["토익 1주차 강의 듣기", "토익 5주차 강의 듣기"];

  return (
    <MainRightOtherTodoContainer>
      <MainRightOtherTodoTitle>강유진님의 투두</MainRightOtherTodoTitle>

      {/* goal mapping */}
      <MainRightGoal goal="학교 수업" todos={dummyTodo1} />
      <MainRightGoal goal="토익" todos={dummyTodo2} />
    </MainRightOtherTodoContainer>
  );
};

export default MainRightOtherTodo;
