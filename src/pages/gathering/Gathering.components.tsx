import React from "react";

import { 
  GatheringContainer,
} from "./Gathering.styles";

import GatheringLeft from "../../components/gathering/gatheringLeft/gatheringLeft.components";
import GatheringRight from "../../components/gathering/gatheringRight/gatheringRight.components";

const Gathering = () => {
  return (
    <GatheringContainer>
      <GatheringLeft />
      <GatheringRight />
    </GatheringContainer>
  )
};

export default Gathering;