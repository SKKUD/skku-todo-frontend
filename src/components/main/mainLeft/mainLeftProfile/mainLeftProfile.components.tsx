import React, { useEffect, useState } from "react";

// import styled components
import { 
  MainLeftProfileContainer,
  MainLeftProfilePhoto,
  MainLeftProfileHello,
} from "./mainLeftProfile.styles";

// import photo for testing
import profile from "../../../../assets/images/profile.jpeg";

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
    <MainLeftProfileContainer>
      <MainLeftProfilePhoto src={profile} />
      <MainLeftProfileHello textColor={textColor} >안녕하세요 강유진님!</MainLeftProfileHello>
    </MainLeftProfileContainer>
  )
}

export default MainLeftProfile;