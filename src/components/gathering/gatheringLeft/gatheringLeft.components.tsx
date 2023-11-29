import React from "react";
import { useNavigate } from "react-router-dom";

import GatheringImage from "./gatheringImage/gatheringImage.components";
import GatheringDesc from "./gatheringDesc/gatheringDesc.components";
import AboutTownIcon from "../../../assets/images/aboutTown.svg";
import BackIcon from "../../../assets/images/back-icon.svg";
import {
  GatheringContainer,
  NavigateToMainBtn,
  GatheringTop,
  AboutTown,
  AboutIcon,
  AboutDiv,
} from "./gatheringLeft.styles";

const GatheringLeft = () => {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/todoView");
  };
  return (
    <GatheringContainer>
      <GatheringTop>
        <NavigateToMainBtn
          onClick={navigateToMain}
          style={{ backgroundImage: `url(${BackIcon})` }}
        />
        <AboutDiv>
          <AboutTown>타운이란?</AboutTown>
          <AboutIcon src={AboutTownIcon} />
        </AboutDiv>
      </GatheringTop>
      <GatheringImage />
      <GatheringDesc />
    </GatheringContainer>
  );
};

export default GatheringLeft;
