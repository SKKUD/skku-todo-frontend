import React from "react";

// import styles
import { 
  MainCenterContainer
} from "./mainCenter.styles";

// import components
import MainCenterTop from "./mainCenterTop/mainCenterTop.components";
import MainCenterGoal from "./mainCenterGoal/mainCenterGoal.components";

const MainCenter = () => {
  return (
    <MainCenterContainer>
      {/* Top part */}
      <MainCenterTop />

      {/* Goal List */}
      <MainCenterGoal />
      <MainCenterGoal />
      <MainCenterGoal />

    </MainCenterContainer>
  )
}

export default MainCenter;