import React from "react";

import {
  GatheringImgContainer,
  GatheringMainImg,
  AboutImg,
} from "./gatheringImage.styles";

import GatheringImg from "../../../../assets/images/GatheringImg.svg";
// import AboutImg from "../../../../assets/images/GatheringImg.svg";

const GatheringImage = ({ isAbout }: { isAbout: boolean }) => {
  let BackgroundImg = GatheringImg;
  if (isAbout) {
    BackgroundImg = AboutImg;
    console.log("about");
  }
  return (
    <GatheringImgContainer>
      <GatheringMainImg
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></GatheringMainImg>
    </GatheringImgContainer>
  );
};

export default GatheringImage;
