import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GatheringImage from "./gatheringImage/gatheringImage.components";
import GatheringDesc from "./gatheringDesc/gatheringDesc.components";
import GatheringEdit from "./gatheringEdit/gatheringEdit.components";

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
  const [isAbout, setIsAbout] = useState(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const navigate = useNavigate();
  const onClickGatheringTop = () => {
    if (isEdit===true) {
      setIsEdit(false);
    } else {
      navigate("/todoView");
    }
  };

  return (
    <GatheringContainer>
      <GatheringTop>
        <NavigateToMainBtn
          onClick={onClickGatheringTop}
          style={{ backgroundImage: `url(${BackIcon})` }}
        />
        <AboutDiv>
          <AboutTown>타운이란?</AboutTown>
          <AboutIcon
            onClick={() => {
              setIsAbout(!isAbout);
            }}
            src={AboutTownIcon}
          />
        </AboutDiv>
      </GatheringTop>
      {
        isEdit ? (
          <GatheringEdit />
        ) : (
          <div>
            <GatheringImage isAbout={isAbout} />
            <GatheringDesc isEdit={isEdit} setIsEdit={setIsEdit}/>
          </div>
        )
      }
    </GatheringContainer>
  );
};

export default GatheringLeft;
