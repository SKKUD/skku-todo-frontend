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

const GatheringMyTown = () => {
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
  
  return (
    <GatheringMyTownContainer>
      <GatheringMyTownTitle>town</GatheringMyTownTitle>
      <GatheringMyTownComponentContainer>
        { isFirst && <GatheringMyTownComponent style={{backgroundImage: `url(${GatheringImage})`}}>
                      <GatheringMyTownComponentTitle>디자인과</GatheringMyTownComponentTitle>
                    </GatheringMyTownComponent>
        }
        { isSecond && <GatheringMyTownComponent style={{backgroundImage: `url(${GatheringImage})`}}>
                      <GatheringMyTownComponentTitle>운동모임</GatheringMyTownComponentTitle>
                    </GatheringMyTownComponent>
        }
        { isThird && <GatheringMyTownComponent style={{backgroundImage: `url(${GatheringImage})`}}>
                      <GatheringMyTownComponentTitle>모임모임</GatheringMyTownComponentTitle>
                    </GatheringMyTownComponent>
        }
        { isFourth && <GatheringMyTownComponent style={{backgroundImage: `url(${GatheringImage})`}}>
                      <GatheringMyTownComponentTitle>네번째모임</GatheringMyTownComponentTitle>
                    </GatheringMyTownComponent>
        }
        { !isFourth && <GatheringMyTownPlus><GatheringMyTownPlusIcon className="mytown_plus" src={PlusIcon} onClick={onClickPlusButton} /></GatheringMyTownPlus>}
      </GatheringMyTownComponentContainer>
    </GatheringMyTownContainer>
  )
};

export default GatheringMyTown;