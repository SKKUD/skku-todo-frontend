import React from "react";
import { useState } from "react";

import { 
  HeaderContainer,
  HeaderContent,
  HeaderLogoContainer,
  HeaderButtonContainer,
  HeaderButtonContent,
  HeaderButtonContentContainer,
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

const Header = () => {
  // theme modal
  const [modalOpen, setModalOpen] = useState(false);
  // alert dropdown
  const [dropdown, setDropDown] = useState(false);

  // modal function
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleClickTheme = () => {
    handleModalOpen();
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogoContainer>
          LOGO
        </HeaderLogoContainer>
        <HeaderButtonContainer>
          {/* alert */}
          <HeaderButtonContentContainer>
            <HeaderButtonContent onClick={() => setDropDown(!dropdown)} src={Bell} />
            <DropDown visibility={dropdown} />
          </HeaderButtonContentContainer>

          {/* theme */}
          <HeaderButtonContent onClick={handleClickTheme} src={ThemeColor}/>

          {/* system */}
          <HeaderButtonContent src={System}>

          </HeaderButtonContent>

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