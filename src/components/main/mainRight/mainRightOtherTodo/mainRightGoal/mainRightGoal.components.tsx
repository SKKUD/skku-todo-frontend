import React from "react";
import MainRightTodo from "../mainRightTodo/mainRightTodo.components";
import {
  MainRightGoalContainer,
  MainRightGoalHeader,
  MainRightGoalDot,
} from "./mainRightGoal.styles";

import { 
  MainCenterGoalTodoList,
  MainCenterGoalWrapper,
  MainCenterGoalNameDash,
  MainCenterGoalContainer,
  MainCenterGoalNameContainer,
  MainCenterGoalName,
} from "../../../mainCenter/mainCenterGoal/mainCenterGoal.styles";
interface IMainRightGoal {
  goal: string;
  todos: string[];
  textColor: string;
  backgroundColor: string;
  lightBgColor: string;
}

const MainRightGoal = ({
  goal,
  todos,
  textColor,
  backgroundColor,
  lightBgColor,
}: IMainRightGoal) => {
  
  return (
    <MainCenterGoalWrapper>
      <MainCenterGoalContainer lightBgColor={lightBgColor}>
        <MainCenterGoalNameContainer>
          <MainCenterGoalNameDash />
          <MainCenterGoalName textColor={textColor}>{goal}</MainCenterGoalName>
        </MainCenterGoalNameContainer>
      </MainCenterGoalContainer>

      <MainCenterGoalTodoList>
        {
          todos.map((todoContent) => (
            <MainRightTodo 
              content={todoContent} 
              textColor={textColor}
              backgroundColor={backgroundColor}
              lightBgColor={lightBgColor}
            />
          ))
        }
      </MainCenterGoalTodoList>
    </MainCenterGoalWrapper>
  );
};

export default MainRightGoal;
