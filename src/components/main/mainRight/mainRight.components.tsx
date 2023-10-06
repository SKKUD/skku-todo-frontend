import React from "react";
import { MainRightContainer } from "./mainRight.styles";

import MainRightGathering from "./mainRightGathering/mainRightGathering.components";
import MainRightOtherTodo from "./mainRightOtherTodo/mainRightOtherTodo.components";

const MainRight = () => {
  return (
    <MainRightContainer>
      <MainRightGathering />
      <MainRightOtherTodo />
    </MainRightContainer>
  );
};

export default MainRight;
