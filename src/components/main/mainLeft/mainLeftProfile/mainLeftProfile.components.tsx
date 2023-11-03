import React, { useEffect, useState } from "react";

// import styled components
import { 
  MainLeftProfileContainer,
  MainLeftProfilePhoto,
  MainLeftProfileHello,
  MainLeftProfileWrapper,
  MainLeftProfileGraphicContainer,
  MainLeftProfileGraphic
} from "./mainLeftProfile.styles";

// import photo for testing
import profile from "../../../../assets/images/profile.jpeg";
import Graphic from "../../../../assets/images/graphic.png";

import { themeColor } from "../../../../recoil/recoil";
import { useRecoilValue } from "recoil";

const MainLeftProfile = () => {
  const theme = useRecoilValue(themeColor);

  const [textColor, setTextColor] = useState<string>("#000");

  useEffect(() => {
    if (theme === "1") {
      setTextColor("#FCFCFC");
    } else {
      setTextColor("#000");
    }
  }, [theme]);

  return (
    <MainLeftProfileWrapper>
      <MainLeftProfileContainer>
        <MainLeftProfilePhoto src={profile} />
        <MainLeftProfileHello textColor={textColor} >강유진님</MainLeftProfileHello>
      </MainLeftProfileContainer>

      <MainLeftProfileGraphicContainer>
        <MainLeftProfileGraphic src={Graphic}/>
      </MainLeftProfileGraphicContainer>
    </MainLeftProfileWrapper>
  )
}

export default MainLeftProfile;