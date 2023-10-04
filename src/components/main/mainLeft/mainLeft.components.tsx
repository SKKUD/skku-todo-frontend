import React from "react";

// import styled components
import { 
  MainLeftContainer,
} from "./mainLeft.styles";

// import components 
import MainLeftProfile from "./mainLeftProfile/mainLeftProfile.components";
import MainLeftGraph from "./mainLeftGraph/mainLeftGraph.components";
import MainLeftTodayMemo from "./mainLeftTodayMemo/mainLeftTodayMemo.components";
import MainLeftCalendar from "./mainLeftCalendar/mainLeftCalendar.components";

const MainLeft = () => {
  return (
    <MainLeftContainer>
      <MainLeftProfile />
      <MainLeftGraph />
      <MainLeftTodayMemo />
      <MainLeftCalendar />
    </MainLeftContainer>
  )
}

export default MainLeft;