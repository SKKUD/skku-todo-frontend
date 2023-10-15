import React from "react";
import { useState } from "react";

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

// import modal
import ModalLayout from "../modalLayout/ModalLayout.components";
import ColorModal from "./colorModal/colorModal.components";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(true);
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
          <HeaderButtonContent src={Bell}/>
          <HeaderButtonContent onClick={handleClickTheme} src={ThemeColor}/>
          <HeaderButtonContent src={System}/>

          <ModalLayout modalOpen={modalOpen} handleModalClose={handleModalClose}>
            <ColorModal handleModalClose={handleModalClose} />
          </ModalLayout>
        </HeaderButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;