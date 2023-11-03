import React, { useEffect, useState } from "react";

// import styles
import { 
  MainContainer,
  MainBackground,
} from "./Main.styles";

// import Main components
import MainLeft from "../../components/main/mainLeft/mainLeft.components";
import MainCenter from "../../components/main/mainCenter/mainCenter.components";
import MainRight from "../../components/main/mainRight/mainRight.components";

import { themeColor } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

const Main = () => {
  const [theme,setTheme] = useRecoilState(themeColor);
  const [backgroundColor, setBackgroundColor] = useState(theme);

  // theme first load
  useEffect(() => {
    if (localStorage.getItem("themeColor")) {
      setTheme(localStorage.getItem("themeColor")!);
    }
  }, []);

  // theme changed
  useEffect(() => {
    if (theme) {
      if (theme === "0") { // light mode
        setBackgroundColor("#DFDDD4")
      }
  
      else if (theme === "1") { // dark mode
        setBackgroundColor("#2F2F2F")
      }
  
      else if (theme === "2") { // pink
        setBackgroundColor("#FFDAE1")
      }
  
      else if (theme === "3") { // yellow
        setBackgroundColor("#FFEC86")
      }
  
      else if (theme === "4") { // green
        setBackgroundColor("#DBF3C3")
      }
  
      else if (theme === "5") { // blue
        setBackgroundColor("#C5DCFF")
      }
  
      else if (theme === "6") { // purple
        setBackgroundColor("#E3D1FF")
      }
    }
    console.log(backgroundColor);
  }, [theme]);

  return (
    <MainBackground theme={backgroundColor}>
      <MainContainer>
        <MainLeft />
        <MainCenter />
        <MainRight />
      </MainContainer>
    </MainBackground>
  )
}

export default Main;