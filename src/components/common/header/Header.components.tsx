import React from "react";

import { 
  HeaderContainer,
  HeaderContent,
  HeaderLogoContainer,
  HeaderButtonContainer,
  HeaderButtonContent,
} from "./Header.styles";

// add assets
import Bell from "../../../assets/images/bell.svg";
import ThemeColor from "../../../assets/images/themeColor.svg";
import System from "../../../assets/images/setting.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogoContainer>
          
        </HeaderLogoContainer>
        <HeaderButtonContainer>
          <HeaderButtonContent src={Bell}/>
          <HeaderButtonContent src={ThemeColor}/>
          <HeaderButtonContent src={System}/>
        </HeaderButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;