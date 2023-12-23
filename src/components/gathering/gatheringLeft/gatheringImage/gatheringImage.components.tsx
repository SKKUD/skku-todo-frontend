import React from "react";

import {
  GatheringImgContainer,
  GatheringMainImg,
  AboutImg,
  AboutImgBottom,
  AboutImgContent,
  AboutImgTitle,
  AboutTownImg,
  AboutImgMiddle,
  AboutQuit,
} from "./gatheringImage.styles";

import GatheringImg from "../../../../assets/images/GatheringImg.svg";
import TownImg from "../../../../assets/images/town.svg";
import QuitIcon from "../../../../assets/images/quit.svg";

interface IGatheringImage {
  isAbout: boolean;
  setIsAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

const GatheringImage = ({ isAbout, setIsAbout }: IGatheringImage) => {
  let BackgroundImg = GatheringImg;
  if (isAbout) {
    BackgroundImg = TownImg;
    console.log("about");
  }
  const handleQuit = () => {
    setIsAbout(!isAbout);
  };
  return (
    <GatheringImgContainer>
      {isAbout ? (
        <AboutImg>
          <AboutQuit src={QuitIcon} onClick={handleQuit} />
          <AboutImgTitle>town</AboutImgTitle>
          <AboutImgMiddle>
            <AboutImgContent>
              공동의 목표를 가진 공동체입니다!
              <br />
              하나의 목표와 투두리스트를 공유하고 서로의 투두리스트를 구경할 수
              있어요
            </AboutImgContent>
            <AboutTownImg src={TownImg} />
          </AboutImgMiddle>
          <AboutImgBottom />
        </AboutImg>
      ) : (
        <GatheringMainImg
          style={{ backgroundImage: `url(${BackgroundImg})` }}
        ></GatheringMainImg>
      )}
    </GatheringImgContainer>
  );
};

export default GatheringImage;
