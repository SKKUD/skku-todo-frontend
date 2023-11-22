import React from "react";

import { 
  GatheringMyTownContainer,
} from "./gatheringMyTown.styles";

import { useRef } from "react";

const GatheringMyTown = () => {
  const MyTownRef = useRef(null);

  return (
    <GatheringMyTownContainer ref={MyTownRef}>

    </GatheringMyTownContainer>
  )
};

export default GatheringMyTown;