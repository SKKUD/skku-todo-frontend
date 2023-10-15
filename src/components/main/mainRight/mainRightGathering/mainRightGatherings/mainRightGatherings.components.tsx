import React from "react";

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

import GatheringImage from "../../../../../assets/images/profile.jpeg";
import GatherPlus from "../../../../../assets/images/GatheringPlus.svg";
import Crown from "../../../../../assets/images/Crown.svg";
import Arrow from "../../../../../assets/images/Arrow.svg";

const MainRightGatherings = () => {
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
      <MainRightAddGatheringBtn>
        <MainRightGatheringPlusImg className="gathering_plus_img" src={GatherPlus} />
      </MainRightAddGatheringBtn>
    </MainRightGatheringWrapper>
  );
};

export default MainRightGatherings;
