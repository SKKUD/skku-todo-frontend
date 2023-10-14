import React, { useState } from "react";

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

import MainCenterMakeTodo from "../mainCenterMakeTodo/mainCenterMakeTodo.components";

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
  const [makeTodo, setMakeTodo] = useState<boolean>(false);

  const handleClickPlus = () => {
    setMakeTodo(true);
  };

  return (
    <MainCenterGoalWrapper>
      {/* My Goal */}
      <MainCenterGoalContainer>
        <MainCenterGoalNameContainer>
          <MainCenterGoalNameDash />
          <MainCenterGoalName>{goal}</MainCenterGoalName>
        </MainCenterGoalNameContainer>
        { !makeTodo && <MainCenterGoalAddButton onClick={handleClickPlus} src={plusButton}/>}
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
      { makeTodo && <MainCenterMakeTodo makeTodo={makeTodo} setMakeTodo={setMakeTodo} goalID={goalID}/>}
    </MainCenterGoalWrapper>
  )
}

export default MainCenterGoal;