import React, { useState } from "react";

// import styles
import { 
  MainCenterContainer
} from "./mainCenter.styles";

// import components
import MainCenterTop from "./mainCenterTop/mainCenterTop.components";
import MainCenterGoal from "./mainCenterGoal/mainCenterGoal.components";
import MainCenterMakeGoal from "./mainCenterMakeGoal/mainCenterMakeGoal.components";

import { TodoDummy } from "../../../utils/data/dummy";

const MainCenter = () => {
  const [makeGoal, setMakeGoal] = useState<boolean>(false);
  return (
    <MainCenterContainer>
      {/* Top part */}
      <MainCenterTop setMakeGoal={setMakeGoal} />

      {/* Goal mapping */}
      {
        TodoDummy.map((TodoObject) => {
          return (
            <MainCenterGoal key={TodoObject.goalID} goal={TodoObject.goal} goalID={TodoObject.goalID} todoList={TodoObject.todo}/>
          )
        })
      }

      {/* new goal added */}
      {
        makeGoal && <MainCenterMakeGoal />
      }
    </MainCenterContainer>
  )
}

export default MainCenter;