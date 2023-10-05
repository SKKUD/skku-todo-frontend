import React from "react";

import { 
  MainCenterTopContainer,
  MainCenterTopMyTodo,
  MainCenterTopAddGoal,
} from "./mainCenterTop.styles";
const MainCenterTop = () => {
  return (
    <MainCenterTopContainer>
      <MainCenterTopMyTodo>나의 투두</MainCenterTopMyTodo>
      <MainCenterTopAddGoal>목표 추가</MainCenterTopAddGoal>
    </MainCenterTopContainer>
  )
}

export default MainCenterTop;