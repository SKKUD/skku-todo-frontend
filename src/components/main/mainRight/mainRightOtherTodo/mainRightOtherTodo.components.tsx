import React from "react";
import MainRightGoal from "./mainRightGoal/mainRightGoal.components";

import { 
  MainRightOtherTodoContainer,
  MainRightOtherTodoTitle
} from "./mainRightOtherTodo.styles";

interface IMainRightOtherTodo {
  textColor: string;
  backgroundColor: string;
  lightBgColor: string;
}

const MainRightOtherTodo = ({
  textColor,
  backgroundColor,
  lightBgColor,
}: IMainRightOtherTodo) => {
  let dummyTodo1: string[] = [
    "문화산업데이터분석 5주차 강의 듣기",
    "문화산업데이터분석 1주차 강의 듣기",
    "문화산업데이터분석 5주차 강의 듣기 두줄두줄두줄두줄두줄두줄두줄두줄",
  ];

  let dummyTodo2: string[] = ["토익 1주차 강의 듣기", "토익 5주차 강의 듣기"];

  return (
    <MainRightOtherTodoContainer backgroundColor={backgroundColor}>
      <MainRightOtherTodoTitle>강유진님의 투두</MainRightOtherTodoTitle>

      {/* goal mapping */}
      <MainRightGoal 
        goal="학교 수업"
        todos={dummyTodo1} 
        textColor={textColor}
        backgroundColor={backgroundColor}
        lightBgColor={lightBgColor}
      />
      <MainRightGoal 
        goal="토익" 
        todos={dummyTodo2} 
        textColor={textColor}
        backgroundColor={backgroundColor}
        lightBgColor={lightBgColor}
      />
    </MainRightOtherTodoContainer>
  );
};

export default MainRightOtherTodo;
