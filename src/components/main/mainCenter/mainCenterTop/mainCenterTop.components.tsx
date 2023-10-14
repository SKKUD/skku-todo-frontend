import React from "react";

import { 
  MainCenterTopContainer,
  MainCenterTopMyTodo,
  MainCenterTopAddGoal,
} from "./mainCenterTop.styles";

interface IMainCenterTop {
  makeGoal: boolean,
  setMakeGoal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainCenterTop = ({makeGoal, setMakeGoal}: IMainCenterTop) => {

  const handleOnClickAddGoal = () => {
    setMakeGoal(true)
  }

  return (
    <MainCenterTopContainer>
      <MainCenterTopMyTodo>나의 투두</MainCenterTopMyTodo>
      { !makeGoal && <MainCenterTopAddGoal onClick={handleOnClickAddGoal}>목표 추가</MainCenterTopAddGoal> }
    </MainCenterTopContainer>
  )
}

export default MainCenterTop;