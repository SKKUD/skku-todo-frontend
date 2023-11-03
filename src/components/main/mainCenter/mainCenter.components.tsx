import React, { useEffect, useState } from "react";

// import styles
import { MainCenterContainer } from "./mainCenter.styles";

// import components
import MainCenterTop from "./mainCenterTop/mainCenterTop.components";
import MainCenterGoal from "./mainCenterGoal/mainCenterGoal.components";
import MainCenterMakeGoal from "./mainCenterMakeGoal/mainCenterMakeGoal.components";

import dummy from "../../../utils/data/dummy.json";

import { themeColor } from "../../../recoil/recoil";
import { useRecoilValue } from "recoil";

const MainCenter = () => {
  const [makeGoal, setMakeGoal] = useState<boolean>(false);
  const theme = useRecoilValue(themeColor);

  const [textColor, setTextColor] = useState<string>("#2C2C2C");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FCFCFC");
  const [lightBgColor, setLightBgColor] = useState<string>("#F5F4F6");
  const [checkBgColor, setCheckBgColor] = useState<string>("#ededed");

  useEffect(() => {
    if (theme === "1") {
      setTextColor("#FCFCFC");
      setBackgroundColor("#3D3D3D");
      setLightBgColor("#636363");
      setCheckBgColor("#5F5F5F");
    } else {
      setTextColor("#2C2C2C");
      setBackgroundColor("#FCFCFC");
      setLightBgColor("#F5F4F6");
      setCheckBgColor("#ededed");
    }
  }, [theme]);

  return (
    <MainCenterContainer backgroundColor={backgroundColor}>
      {/* Top part */}
      <MainCenterTop makeGoal={makeGoal} setMakeGoal={setMakeGoal} textColor={textColor} backgroundColor={backgroundColor} lightBgColor={lightBgColor}/>

      {/* Goal mapping */}
      {dummy.todoDummy.map((TodoObject) => {
        return (
          <MainCenterGoal
            key={TodoObject.goalID}
            goal={TodoObject.goal}
            goalID={TodoObject.goalID}
            todoList={TodoObject.todo}
            textColor={textColor}
            backgroundColor={backgroundColor}
            lightBgColor={lightBgColor}
            checkBgColor={checkBgColor}
          />
        );
      })}

      {/* new goal added */}
      {makeGoal && (
        <MainCenterMakeGoal makeGoal={makeGoal} setMakeGoal={setMakeGoal} />
      )}
    </MainCenterContainer>
  );
};

export default MainCenter;
