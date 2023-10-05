import React from "react";

import { 
  MainCenterGoalWrapper,
  MainCenterGoalContainer,
  MainCenterGoalNameContainer,
  MainCenterGoalAddButton,
  MainCenterGoalNameDash,
  MainCenterGoalName,
  MainCenterGoalTodoList,
} from "./mainCenterGoal.styles";

// import plus button
import plusButton from "../../../../assets/images/plus.svg";

import MainCenterTodo from "../mainCenterTodo/mainCenterTodo.components";

const MainCenterGoal = () => {
  return (
    <MainCenterGoalWrapper>
      {/* My Goal */}
      <MainCenterGoalContainer>
        <MainCenterGoalNameContainer>
          <MainCenterGoalNameDash />
          <MainCenterGoalName>학교수업</MainCenterGoalName>
        </MainCenterGoalNameContainer>
        <MainCenterGoalAddButton src={plusButton}/>
      </MainCenterGoalContainer>

      {/* Todo List */}
      <MainCenterGoalTodoList>
        <MainCenterTodo />
        <MainCenterTodo />
        <MainCenterTodo />
      </MainCenterGoalTodoList>
    </MainCenterGoalWrapper>
  )
}

export default MainCenterGoal;