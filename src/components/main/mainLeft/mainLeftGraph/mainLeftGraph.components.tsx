import React, { useEffect, useState } from "react";

// import styled comopnets
import { 
  MainLeftSubProfileContainer,
  MainLeftSubProfileContent
} from "./mainLeftGraph.styles";

import { themeColor } from "../../../../recoil/recoil";
import { useRecoilValue } from "recoil";

const MainLeftSubProfile = () => {
  const theme = useRecoilValue(themeColor);

  const [backgroundColor, setBackgroundColor] = useState<string>("");

  useEffect(() => {
    if (theme === "1") {
      setBackgroundColor("#3D3D3D");
    } else {
      setBackgroundColor("#F3F2F0");
    }
  }, [theme]);

  return (
    <MainLeftSubProfileContainer backgroundColor={backgroundColor}>
      <MainLeftSubProfileContent />
    </MainLeftSubProfileContainer>
  )
}

export default MainLeftSubProfile;
