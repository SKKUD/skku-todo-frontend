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

interface IMainCenterGoal {
  goal: string,
  todoList: Array<string>
}

const MainCenterGoal = ({goal, todoList}: IMainCenterGoal) => {
  return (
    <MainCenterGoalWrapper>
      {/* My Goal */}
      <MainCenterGoalContainer>
        <MainCenterGoalNameContainer>
          <MainCenterGoalNameDash />
          <MainCenterGoalName>{goal}</MainCenterGoalName>
        </MainCenterGoalNameContainer>
        <MainCenterGoalAddButton src={plusButton}/>
      </MainCenterGoalContainer>

      {/* Todo List */}
      <MainCenterGoalTodoList>
        {
          todoList.map((todo) => {
            return (
              <MainCenterTodo todoContent={todo}/>
            )
          })
        }
      </MainCenterGoalTodoList>
    </MainCenterGoalWrapper>
  )
}

export default MainCenterGoal;