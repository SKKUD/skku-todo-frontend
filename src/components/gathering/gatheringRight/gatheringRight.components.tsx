import React, { useEffect, useState } from "react";

import GatheringMember from "./gatheringMember/gatheringMember.components";
import GatheringMyTown from "./gatheringMyTown/gatheringMyTown.components";

import { GatheringRightContainer } from "./gatheringRight.styles";

interface IGatheringInfo {
  GatheringName: string,
  GatheringGoal: string,
  GatheringManager: string,
  Towner: Array<string>,
}

interface IGatheringRight {
  data: Array<IGatheringInfo>,
  setLeftWhichGathering: React.Dispatch<React.SetStateAction<number>>;
}

const GatheringRight = ({data, setLeftWhichGathering}: IGatheringRight) => {
  const [whichGathering, setWhichGathering] = useState<number>(-1);
  const [GatheringNameList, setGatheringNameList] = useState<Array<string>>([]);
  const [GatheringMemberList, setGatheringMemberList] = useState<Array<string>>([]);

  useEffect(() => {
    if (whichGathering !== -1) {
      setGatheringMemberList(data[whichGathering].Towner);
    } 
  }, [whichGathering]);
  
  useEffect(() => {
    const ExtractedGatheringName: Array<string> = data.map((element) => element.GatheringName);
    setGatheringNameList(ExtractedGatheringName);
  }, []);

  return (
    <GatheringRightContainer>
      <GatheringMyTown setWhichGathering={setWhichGathering} setLeftWhichGathering={setLeftWhichGathering} GatheringNameList={GatheringNameList} />
      <GatheringMember whichGathering={whichGathering} GatheringTowner={GatheringMemberList}/>
    </GatheringRightContainer>
  );
};

export default GatheringRight;