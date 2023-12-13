import React from "react";

import {
  GatheringMyTownContainer,
  GatheringMyTownTitle,
  GatheringMyTownComponentContainer,
  GatheringMyTownComponent,
  GatheringMyTownPlus,
  GatheringMyTownPlusIcon,
  GatheringMyTownComponentTitle,
} from "./gatheringMyTown.styles";

import GatheringImage from "../../../../assets/images/profile.jpeg";
import PlusIcon from "../../../../assets/images/plus.svg";

import { useState } from "react";

interface IGatheringTown {
  GatheringNameList: Array<string>;
  setLeftWhichGathering: React.Dispatch<React.SetStateAction<number>>,
  setWhichGathering: React.Dispatch<React.SetStateAction<number>>,
  isCreate: boolean,
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>,
  isEdit: boolean,
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
  setIsAbout: React.Dispatch<React.SetStateAction<boolean>>,
}

const GatheringMyTown = ({GatheringNameList, setLeftWhichGathering, setWhichGathering, isCreate, setIsCreate, isEdit, setIsEdit, setIsAbout}: IGatheringTown) => {
  const [currentTown, setCurrentTown] = useState<number>(0);
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const [isSecond, setIsSecond] = useState<boolean>(false);
  const [isThird, setIsThird] = useState<boolean>(false);
  const [isFourth, setIsFourth] = useState<boolean>(false);

  const onClickPlusButton = () => {
    setIsEdit(false)
    setIsCreate(true)
    setWhichGathering(-1);
    setLeftWhichGathering(-1);
    setIsAbout(true);
  };

  const onClickGathering = (gatheringNumber: number) => {
    setWhichGathering(gatheringNumber);
    setLeftWhichGathering(gatheringNumber);
    setIsEdit(false);
    setIsCreate(false);
    setIsAbout(false);

  };

  return (
    <GatheringMyTownContainer>
      <GatheringMyTownTitle>town</GatheringMyTownTitle>
      <GatheringMyTownComponentContainer>
        {
          GatheringNameList.map((name, i) => {
            return (
              <GatheringMyTownComponent onClick={() => onClickGathering(i)} style={{backgroundImage: `url(${GatheringImage})`}}>
                <GatheringMyTownComponentTitle>{name}</GatheringMyTownComponentTitle>
              </GatheringMyTownComponent>
            )
          })
        }
        
        { !isFourth && <GatheringMyTownPlus><GatheringMyTownPlusIcon className="mytown_plus" src={PlusIcon} onClick={onClickPlusButton} /></GatheringMyTownPlus>}
      </GatheringMyTownComponentContainer>
    </GatheringMyTownContainer>
  );
};

export default GatheringMyTown;
