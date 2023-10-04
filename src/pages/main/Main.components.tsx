import React from "react";

// import styles
import { 
  MainContainer 
} from "./Main.styles";

// import Main components
import MainLeft from "../../components/main/mainLeft/mainLeft.components";
import MainCenter from "../../components/main/mainCenter/mainCenter.components";
import MainRight from "../../components/main/mainRight/mainRight.components";

const Main = () => {
  return (
    <MainContainer>
      <MainLeft />
      <MainCenter />
      <MainRight />
    </MainContainer>
  )
}

export default Main;