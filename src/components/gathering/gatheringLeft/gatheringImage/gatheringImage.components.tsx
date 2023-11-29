import React from "react";

import {
  GatheringImgContainer,
  GatheringMainImg,
} from "./gatheringImage.styles";

import GatheringImg from "../../../../assets/images/GatheringImg.svg";

const GatheringImage = () => {
  return (
    <GatheringImgContainer>
      <GatheringMainImg
        style={{ backgroundImage: `url(${GatheringImg})` }}
      ></GatheringMainImg>
    </GatheringImgContainer>
  );
};

export default GatheringImage;
