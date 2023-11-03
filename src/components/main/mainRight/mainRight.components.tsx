import React, { useEffect, useState } from "react";
import { MainRightContainer } from "./mainRight.styles";

import MainRightGathering from "./mainRightGathering/mainRightGathering.components";
import MainRightOtherTodo from "./mainRightOtherTodo/mainRightOtherTodo.components";

import { themeColor } from "../../../recoil/recoil";
import { useRecoilValue } from "recoil";


const MainRight = () => {
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
    <MainRightContainer>
      <MainRightGathering 
        textColor={textColor}
        backgroundColor={backgroundColor}
        lightBgColor={lightBgColor}
      />
      <MainRightOtherTodo 
        textColor={textColor}
        backgroundColor={backgroundColor}
        lightBgColor={lightBgColor}
      />
    </MainRightContainer>
  );
};

export default MainRight;
