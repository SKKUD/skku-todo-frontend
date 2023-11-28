import React from "react";

import { 
  GatheringMyTownContainer,
  GatheringMyTownTitle,
  GatheringMyTownComponentContainer,
  GatheringMyTownComponent,
} from "./gatheringMyTown.styles";

import GatheringImage from "../../../../assets/images/profile.jpeg";

const GatheringMyTown = () => {

  return (
    <GatheringMyTownContainer>
      <GatheringMyTownTitle>town</GatheringMyTownTitle>
      <GatheringMyTownComponentContainer>
        <GatheringMyTownComponent style={{backgroundImage: `url(${GatheringImage})`}}/>
        <GatheringMyTownComponent />
        <GatheringMyTownComponent />
        <GatheringMyTownComponent />

      </GatheringMyTownComponentContainer>
    </GatheringMyTownContainer>
  )
};

export default GatheringMyTown;