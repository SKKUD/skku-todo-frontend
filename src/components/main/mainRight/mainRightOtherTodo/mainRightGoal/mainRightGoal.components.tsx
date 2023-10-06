import React from "react";
import MainRightTodo from "../mainRightTodo/mainRightTodo.components";
import {
  MainRightGoalContainer,
  MainRightGoalHeader,
  MainRightGoalDot,
} from "./mainRightGoal.styles";

interface propsType {
  goal: string;
  todo: string[];
}

const MainRightGoal = (props: propsType) => {
  const goal = props.goal;
  const todos = props.todo;
  return (
    <MainRightGoalContainer>
      <MainRightGoalHeader>
        <MainRightGoalDot />
        {goal}
      </MainRightGoalHeader>
      {todos.map((t) => (
        <MainRightTodo content={t} />
      ))}
    </MainRightGoalContainer>
  );
};

export default MainRightGoal;
