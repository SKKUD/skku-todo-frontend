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

// import modal
import ModalLayout from "../modalLayout/ModalLayout.components";
import ColorModal from "./colorModal/colorModal.components";

// import dropdown
import DropDown from "./dropdown/DropDown.components";

// impor system popover
import SystemPopOver from "./SystemPopover/SystemPopover.components";

import { themeColor } from "../../../recoil/recoil";
import { useRecoilValue } from "recoil";

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
        <HeaderLogoContainer>
          LOGO
        </HeaderLogoContainer>

        {/* button container */}
        <HeaderButtonContainer>
          {/* 모임 */}
          <HeaderButtonContentContainer>
            <HeaderGatheringButton onClick={handleClickGathering} textColor={textColor}>
              모임
            </HeaderGatheringButton>
          </HeaderButtonContentContainer>
      
          {/* alert */}
          <HeaderButtonContentContainer>
            <HeaderButtonContent onClick={() => setDropDown(!dropdown)} src={Bell} />
            <DropDown visibility={dropdown} />
          </HeaderButtonContentContainer>

          {/* theme */}
          <HeaderButtonContent onClick={handleClickTheme} src={ThemeColor}/>

          {/* system */}
          <HeaderPopoverButton onClick={handleMenuClick}>
            <HeaderButtonContent src={System} />
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