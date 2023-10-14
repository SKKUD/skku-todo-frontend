import React, { useState } from "react";

// import styles
import { 
  MainCenterContainer
} from "./mainCenter.styles";

// import components
import MainCenterTop from "./mainCenterTop/mainCenterTop.components";
import MainCenterGoal from "./mainCenterGoal/mainCenterGoal.components";
import MainCenterMakeGoal from "./mainCenterMakeGoal/mainCenterMakeGoal.components";

import dummy from "../../../utils/data/dummy.json";

const MainCenter = () => {
  const [makeGoal, setMakeGoal] = useState<boolean>(false);

  return (
    <MainCenterContainer>
      {/* Top part */}
      <MainCenterTop makeGoal={makeGoal} setMakeGoal={setMakeGoal} />

      {/* Goal mapping */}
      {
        dummy.todoDummy.map((TodoObject) => {
          return (
            <MainCenterGoal key={TodoObject.goalID} goal={TodoObject.goal} goalID={TodoObject.goalID} todoList={TodoObject.todo}/>
          )
        })
      }

      {/* new goal added */}
      {
        makeGoal && <MainCenterMakeGoal makeGoal={makeGoal} setMakeGoal={setMakeGoal} />
      }
    </MainCenterContainer>
  )
}

export default MainCenter;