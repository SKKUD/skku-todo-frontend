import React, { useEffect, useState } from "react";

import GatheringMember from "./gatheringMember/gatheringMember.components";
import GatheringMyTown from "./gatheringMyTown/gatheringMyTown.components";

import { GatheringRightContainer } from "./gatheringRight.styles";

const ArrayGathering = [
  {
    GatheringName: "디자인팀",
    Towner: ["안준성", "강유진", "누군가", "아무개", "그리고", "너도?"]
  },
  {
    GatheringName: "운동모임",
    Towner: ["운동", "벤치", "데드", "하하", "그리고", "너도?", "모임사당", "사당", "홍대", "뭐용", "개발", "싫어"]
  },
  {
    GatheringName: "모임모임",
    Towner: ["모임사당", "사당", "홍대", "뭐용", "개발", "싫어","모임사당", "사당", "홍대", "뭐용", "개발", "싫어","모임사당", "사당", "홍대", "뭐용", "개발", "싫어"]
  }
]
const GatheringRight = () => {
  const [whichGathering, setWhichGathering] = useState<number>(-1);
  const [GatheringNameList, setGatheringNameList] = useState<Array<string>>([]);
  const [GatheringMemberList, setGatheringMemberList] = useState<Array<string>>([]);

  useEffect(() => {
    if (whichGathering !== -1) {
      setGatheringMemberList(ArrayGathering[whichGathering].Towner);
    } 
  }, [whichGathering]);
  
  useEffect(() => {
    const ExtractedGatheringName: Array<string> = ArrayGathering.map((element) => element.GatheringName);
    setGatheringNameList(ExtractedGatheringName);
  }, []);

  return (
    <GatheringRightContainer>
      <GatheringMyTown setWhichGathering={setWhichGathering} GatheringNameList={GatheringNameList} />
      <GatheringMember whichGathering={whichGathering} GatheringTowner={GatheringMemberList}/>
    </GatheringRightContainer>
  );
};

export default GatheringRight;