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
        TodoDummy.map((Todo) => {
          return (
            <MainCenterGoal goal={Todo.goal} todoList={Todo.todo}/>
          )
        })
      }

    </MainCenterContainer>
  )
}

export default MainCenter;