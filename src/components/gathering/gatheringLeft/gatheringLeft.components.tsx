import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GatheringImage from "./gatheringImage/gatheringImage.components";
import GatheringDesc from "./gatheringDesc/gatheringDesc.components";
import GatheringEdit from "./gatheringEdit/gatheringEdit.components";
import GatheringCreate from "./gatheringCreate/gatheringCreate.components";

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

interface IGatheringInfo {
  GatheringName: string,
  GatheringGoal: string,
  GatheringManager: string,
  Towner: Array<string>,
}

interface IGatheringLeft {
  data: Array<IGatheringInfo>,
  leftWhichGathering: number, 
  isCreate: boolean,
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean,
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const GatheringLeft = ({data, leftWhichGathering, isCreate, setIsCreate, isEdit, setIsEdit}: IGatheringLeft) => {
  const [isAbout, setIsAbout] = useState(false);

  const navigate = useNavigate();
  const onClickGatheringTop = () => {
    if (isEdit===true || isCreate===true) {
      setIsEdit(false);
      setIsCreate(false)
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
            {
              isCreate ? (
                <GatheringCreate />
              ) : (
                <div>
                  <GatheringImage isAbout={isAbout} />
                  {
                    (leftWhichGathering !== -1) && (
                      <GatheringDesc GatheringData={data[leftWhichGathering]} isEdit={isEdit} setIsEdit={setIsEdit}/>
                    )
                  }
                </div>
              )
            }
          </div>
        )
      }
    </GatheringContainer>
  );
};

export default GatheringLeft;
