import React from "react";

// import styles
import { 
  MainCenterContainer
} from "./mainCenter.styles";

// import components
import MainCenterTop from "./mainCenterTop/mainCenterTop.components";
import MainCenterGoal from "./mainCenterGoal/mainCenterGoal.components";

import { TodoDummy } from "../../../utils/data/dummy";

const MainCenter = () => {
  return (
    <MainCenterContainer>
      {/* Top part */}
      <MainCenterTop />
      
      {
        TodoDummy.map((TodoObject) => {
          return (
            <MainCenterGoal key={TodoObject.goalID} goal={TodoObject.goal} goalID={TodoObject.goalID} todoList={TodoObject.todo}/>
          )
        })
      }

    </MainCenterContainer>
  )
}

export default MainCenter;