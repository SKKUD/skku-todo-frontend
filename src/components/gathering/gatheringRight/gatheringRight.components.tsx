import React from "react";

import GatheringMember from "./gatheringMember/gatheringMember.components";
import GatheringMyTown from "./gatheringMyTown/gatheringMyTown.components";

import { GatheringRightContainer } from "./gatheringRight.styles";

const GatheringRight = () => {

  return (
    <GatheringRightContainer>
      <GatheringMyTown />
      <GatheringMember />
    </GatheringRightContainer>
  );
};

export default GatheringRight;