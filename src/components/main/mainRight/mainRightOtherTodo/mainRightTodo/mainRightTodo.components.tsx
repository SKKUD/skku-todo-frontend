import React from "react";

import {
  MainRightTodoContent,
  MainRightTodoContainer,
  MainRightTodoCheck,
  MainRightTodoReaction,
} from "./mainRightTodo.styles";

interface propsType {
  content: string;
}

const MainRightTodo = (props: propsType) => {
  const content = props.content;
  return (
    <MainRightTodoContainer>
      <MainRightTodoCheck />
      <MainRightTodoContent>{content}</MainRightTodoContent>
      <MainRightTodoReaction />
    </MainRightTodoContainer>
  );
};

export default MainRightTodo;
