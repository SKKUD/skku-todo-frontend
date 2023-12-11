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
  setLeftWhichGathering: React.Dispatch<React.SetStateAction<number>>;
  setWhichGathering: React.Dispatch<React.SetStateAction<number>>;
}

const GatheringMyTown = ({GatheringNameList, setLeftWhichGathering, setWhichGathering}: IGatheringTown) => {
  const [currentTown, setCurrentTown] = useState<number>(0);
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const [isSecond, setIsSecond] = useState<boolean>(false);
  const [isThird, setIsThird] = useState<boolean>(false);
  const [isFourth, setIsFourth] = useState<boolean>(false);

  const onClickPlusButton = () => {
    if (currentTown === 0) {
      setCurrentTown(1);
      setIsFirst(true);
    } else if (currentTown === 1) {
      setCurrentTown(2);
      setIsSecond(true);
    } else if (currentTown === 2) {
      setCurrentTown(3);
      setIsThird(true);
    }else if (currentTown === 3) {
      setCurrentTown(4);
      setIsFourth(true);
    }
  };
  const onClickGathering = (gatheringNumber: number) => {
    setWhichGathering(gatheringNumber);
    setLeftWhichGathering(gatheringNumber);
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
