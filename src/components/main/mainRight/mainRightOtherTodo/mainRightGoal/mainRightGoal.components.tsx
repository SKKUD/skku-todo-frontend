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
}

const MainRightGoal = ({goal,todos}: IMainRightGoal) => {
  
  return (
    <MainCenterGoalWrapper>
      <MainCenterGoalContainer>
        <MainCenterGoalNameContainer>
          <MainCenterGoalNameDash />
          <MainCenterGoalName>{goal}</MainCenterGoalName>
        </MainCenterGoalNameContainer>
      </MainCenterGoalContainer>

      <MainCenterGoalTodoList>
        {
          todos.map((todoContent) => (
            <MainRightTodo content={todoContent} />
          ))
        }
      </MainCenterGoalTodoList>
    </MainCenterGoalWrapper>
  );
};

export default MainRightGoal;
