import React, { useState } from "react";
import { ChangeEvent } from "react";

import { 
  MainCenterGoalContainer,
  MainCenterGoalNameContainer,
  MainCenterGoalNameDash,
  MainCenterGoalName,
  MainCenterGoalAddButton,
} from "../mainCenterGoal/mainCenterGoal.styles";

import { MainCenterMakeGoalTextArea } from "./mainCenterMakeGoal.styles";

// import plus button
import plusButton from "../../../../assets/images/plus.svg";

const MainCenterMakeGoal = () => {
  const [newGoal, setNewGoal] = useState<string>("");

  const handleOnChangeMakeGoal = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewGoal(event.target.value);
  };

  return (
    <MainCenterGoalContainer>
      <MainCenterGoalNameContainer>
        <MainCenterGoalNameDash />
        <MainCenterMakeGoalTextArea placeholder="새로운 목표" value={newGoal} onChange={handleOnChangeMakeGoal}/>
      </MainCenterGoalNameContainer>
      <MainCenterGoalAddButton src={plusButton}/>
    </MainCenterGoalContainer>
  )
};


export default MainCenterMakeGoal;