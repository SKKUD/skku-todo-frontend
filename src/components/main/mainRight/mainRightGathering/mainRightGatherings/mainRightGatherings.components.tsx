import React from "react";
import { useState } from "react";

import {
  MainRightGatheringWrapper,
  MainRightGatheringIcon,
  MainRightAddGatheringBtn,
  MainRightGatheringPlusImg,
  MainRightGatheringIconHeader,
  MainRightGatheringIconTitle,
  MainRightGatheringIconHeaderCrown,
  MainRightGatheringIconheaderRight,
} from "./mainRightGatherings.styles";

// import assets
import GatheringImage from "../../../../../assets/images/profile.jpeg";
import GatherPlus from "../../../../../assets/images/GatheringPlus.svg";
import Crown from "../../../../../assets/images/Crown.svg";
import Arrow from "../../../../../assets/images/Arrow.svg";

// import modalLayouts
import ModalLayout from "../../../../common/modalLayout/ModalLayout.components";
import MakeGatheringModal from "./MakeGatheringModal/MakeGatheringModal.components";

const MainRightGatherings = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // modal function
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <MainRightGatheringWrapper>
      <MainRightGatheringIcon style={{backgroundImage: `url(${GatheringImage})`}}>
        <MainRightGatheringIconHeader>
          <MainRightGatheringIconHeaderCrown src={Crown} />
          <MainRightGatheringIconheaderRight src={Arrow} />
        </MainRightGatheringIconHeader>

        <MainRightGatheringIconTitle>
          디쟌과 20
        </MainRightGatheringIconTitle>
      </MainRightGatheringIcon>

      {/* Add button */}
      <MainRightAddGatheringBtn onClick={handleModalOpen}>
        <MainRightGatheringPlusImg className="gathering_plus_img" src={GatherPlus} />
      </MainRightAddGatheringBtn>

      {/* Modal */}
      <ModalLayout modalOpen={modalOpen} handleModalClose={handleModalClose}>
        <MakeGatheringModal handleModalClose={handleModalClose} />
      </ModalLayout>
    </MainRightGatheringWrapper>
  );
};

export default MainRightGatherings;
