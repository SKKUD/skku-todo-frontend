import React from "react";

import { 
  MainCenterTopContainer,
  MainCenterTopMyTodo,
  MainCenterTopAddGoal,
} from "./mainCenterTop.styles";

interface IMainCenterTop {
  makeGoal: boolean,
  setMakeGoal: React.Dispatch<React.SetStateAction<boolean>>;
  textColor: string,
  backgroundColor: string,
  lightBgColor: string,
}

const MainCenterTop = ({makeGoal, setMakeGoal,textColor,backgroundColor,lightBgColor}: IMainCenterTop) => {

  const handleOnClickAddGoal = () => {
    setMakeGoal(true)
  }

  return (
    <MainCenterTopContainer>
      <MainCenterTopMyTodo textColor={textColor}>나의 투두</MainCenterTopMyTodo>
      { !makeGoal && <MainCenterTopAddGoal lightBgColor={lightBgColor} textColor={textColor} onClick={handleOnClickAddGoal}>목표 추가</MainCenterTopAddGoal> }
    </MainCenterTopContainer>
  )
}

export default MainCenterTop;