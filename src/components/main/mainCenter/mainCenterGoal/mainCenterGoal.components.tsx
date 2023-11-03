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
import { light } from "@mui/material/styles/createPalette";

interface IRoutine {
  routineDay?: string[] | undefined | null;
  routineEndDate?: string | undefined | null;
}

interface ITodoObject {
  todoID: string;
  todo: string;
  routine: IRoutine;
}

interface IMainCenterGoal {
  goal: string;
  goalID: string;
  todoList: Array<ITodoObject>;
  textColor: string;
  backgroundColor: string;
  lightBgColor: string;
  checkBgColor: string,
}

const MainCenterGoal = ({ goal, goalID, todoList, textColor, backgroundColor, lightBgColor, checkBgColor}: IMainCenterGoal) => {
  const [makeTodo, setMakeTodo] = useState<boolean>(false);
  const [makeRoutine, setMakeRoutine] = useState<boolean>(false);
  const handleClickPlus = () => {
    setMakeTodo(true);
  };

  return (
    <MainCenterGoalWrapper>
      {/* My Goal */}
      <MainCenterGoalContainer lightBgColor={lightBgColor}>
        <MainCenterGoalNameContainer>
          <MainCenterGoalNameDash />
          <MainCenterGoalName textColor={textColor}>{goal}</MainCenterGoalName>
        </MainCenterGoalNameContainer>
        {!makeTodo && (
          <MainCenterGoalAddButton onClick={handleClickPlus} src={plusButton} />
        )}
      </MainCenterGoalContainer>

      {/* Todo List */}
      <MainCenterGoalTodoList>
        {todoList.map((todoObject) => {
          return (
            <MainCenterTodo
              goalID={goalID}
              todoID={todoObject.todoID}
              todoContent={todoObject.todo}
              routine={todoObject.routine}
              textColor={textColor}
              backgroundColor={backgroundColor}
              lightBgColor={lightBgColor}
              checkBgColor={checkBgColor}
            />
          );
        })}
      </MainCenterGoalTodoList>
      {makeTodo && (
        <>
          <MainCenterMakeTodo
            makeTodo={makeTodo}
            setMakeTodo={setMakeTodo}
            goalID={goalID}
          />
        </>
      )}
    </MainCenterGoalWrapper>
  );
};

export default MainCenterGoal;
