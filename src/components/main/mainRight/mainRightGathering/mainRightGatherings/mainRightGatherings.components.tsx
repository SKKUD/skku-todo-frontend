import React from "react";

import {
  MainRightGatheringWrapper,
  MainRightGatheringIcon,
  MainRightAddGatheringBtn,
} from "./mainRightGatherings.styles";

import Img from "../../../../../assets/images/profile.jpeg";

const MainRightGatherings = () => {
  return (
    <MainRightGatheringWrapper>
      <MainRightGatheringIcon src={Img} />
      <MainRightAddGatheringBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M27 15H3M15 3V27"
            stroke="#5F5F5F"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </MainRightAddGatheringBtn>
    </MainRightGatheringWrapper>
  );
};

export default MainRightGatherings;
