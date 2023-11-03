import React, { useEffect } from "react";
import { useState } from "react";

import { 
  HeaderContainer,
  HeaderContent,
  HeaderLogoContainer,
  HeaderButtonContainer,
  HeaderButtonContent,
  HeaderButtonContentContainer,
  HeaderPopoverButton,
  HeaderGatheringButton
} from "./Header.styles";

// add assets
import Bell from "../../../assets/images/bell.svg";
import ThemeColor from "../../../assets/images/themeColor.svg";
import System from "../../../assets/images/setting.svg";

import DarkBell from "../../../assets/images/bell_dark.svg";
import DarkThemeColor from "../../../assets/images/color_dark.svg";
import DarkSystem from "../../../assets/images/settingDarkMode.svg";

// import modal
import ModalLayout from "../modalLayout/ModalLayout.components";
import ColorModal from "./colorModal/colorModal.components";

// import dropdown
import DropDown from "./dropdown/DropDown.components";

// impor system popover
import SystemPopOver from "./SystemPopover/SystemPopover.components";

import { themeColor } from "../../../recoil/recoil";
import { useRecoilValue } from "recoil";

import Logo from "../../../assets/images/logo.svg";
import Group from "../../../assets/images/groupIcon.svg";

const Header = () => {
  const theme = useRecoilValue(themeColor);
  
  const [backgroundColor, setBackgroundColor] = useState<string>("#FCFCFC");
  const [textColor, setTextColor] = useState<string>("#5F5F5F")

  // theme modal
  const [modalOpen, setModalOpen] = useState(false);

  // alert dropdown
  const [dropdown, setDropDown] = useState(false);

  // system popover
  // 팝업
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const PopoverOpen = Boolean(anchorEl);

  // modal function
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleClickTheme = () => {
    handleModalOpen();
  };

  const handleClickGathering = () => {

  };

  useEffect(() => {
    if (theme === "1") { // if dark mode
      setBackgroundColor("#3D3D3D");
      setTextColor("#FCFCFC");
    }
    else {
      setBackgroundColor("#FCFCFC");
      setTextColor("#5F5F5F");
    }
  }, [theme]);

  return (
    <HeaderContainer theme={backgroundColor}>
      <HeaderContent>
        {/* logo container */}
        <HeaderLogoContainer src={Logo}/>

        {/* button container */}
        <HeaderButtonContainer>
          {/* 모임 */}
          <HeaderButtonContentContainer>
            <HeaderGatheringButton onClick={handleClickGathering} src={Group}/>
          </HeaderButtonContentContainer>
      
          {/* alert */}
          <HeaderButtonContentContainer >
            <HeaderButtonContent onClick={() => setDropDown(!dropdown)} src={(theme==="1" ? DarkBell : Bell)} />
            <DropDown visibility={dropdown} />
          </HeaderButtonContentContainer>

          {/* theme */}
          <HeaderButtonContent onClick={handleClickTheme} src={(theme==="1" ? DarkThemeColor : ThemeColor)}/>

          {/* system */}
          <HeaderPopoverButton backgroundColor={backgroundColor} onClick={handleMenuClick}>
            <HeaderButtonContent src={(theme==="1" ? DarkSystem : System)} />
          </HeaderPopoverButton>

          <SystemPopOver
            open={PopoverOpen}
            anchorEl={anchorEl}
            handleClose={handlePopoverClose}
          />

          {/* modal */}
          <ModalLayout modalOpen={modalOpen} handleModalClose={handleModalClose}>
            <ColorModal handleModalClose={handleModalClose} />
          </ModalLayout>
        </HeaderButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;