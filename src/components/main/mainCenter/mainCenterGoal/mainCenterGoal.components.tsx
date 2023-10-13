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

interface ITodoObject {
  todoID: string,
  todo: string,
}

interface IMainCenterGoal {
  goal: string,
  goalID: string,
  todoList: Array<ITodoObject>
}

const MainCenterGoal = ({goal, goalID, todoList}: IMainCenterGoal) => {
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
          todoList.map((todoObject) => {
            return (
              <MainCenterTodo goalID={goalID} todoID={todoObject.todoID} todoContent={todoObject.todo}/>
            )
          })
        }
      </MainCenterGoalTodoList>
    </MainCenterGoalWrapper>
  )
}

export default MainCenterGoal;