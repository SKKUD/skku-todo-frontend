import React, { useState } from "react";
import { ChangeEvent } from "react";

import { 
  MainCenterGoalContainer,
  MainCenterGoalNameContainer,
  MainCenterGoalNameDash,
  MainCenterGoalName,
  MainCenterGoalAddButton,
} from "../mainCenterGoal/mainCenterGoal.styles";

import { 
  MainCenterMakeGoalTextArea,
  MainCenterMakeGoalContainer,
  MainCenterMakeGoalDone
} from "./mainCenterMakeGoal.styles";

// import plus button
import plusButton from "../../../../assets/images/plus.svg";

interface IMainCenterMakeGoal {
  makeGoal: boolean,
  setMakeGoal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainCenterMakeGoal = ({makeGoal, setMakeGoal}: IMainCenterMakeGoal) => {
  const [newGoal, setNewGoal] = useState<string>("");

  const handleOnChangeMakeGoal = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewGoal(event.target.value);
  };

  const handleOnClickGoalDone = () => {
    // add new goal to db or local test

    // set newGoal to false
    setMakeGoal(false)
  };

  return (
    <MainCenterMakeGoalContainer className="makegoal_container">
      <MainCenterGoalNameContainer>
        <MainCenterGoalNameDash />
        <MainCenterMakeGoalTextArea placeholder="새로운 목표" value={newGoal} onChange={handleOnChangeMakeGoal}/>
      </MainCenterGoalNameContainer>
      <MainCenterMakeGoalDone onClick={handleOnClickGoalDone} />
    </MainCenterMakeGoalContainer>
  )
};


export default MainCenterMakeGoal;