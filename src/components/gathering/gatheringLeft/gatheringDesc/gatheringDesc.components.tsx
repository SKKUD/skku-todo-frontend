import React from "react";

import {
  GatheringDescContainer,
  GatheringDescBlock,
  GatheringDescLightText,
  GatheringDescBottom,
  GatheringDescMiddle,
  GatheringDescText,
  GatheringDescTitle,
  GatheringDescTop,
  GatheringEditBtn,
  GatheringProfileImg,
  GatheringExplainWrapper,
  GatheringExplain,
} from "./gatheringDesc.styles";
import EditIcon from "../../../../assets/images/gatheringEdit.svg";
import GatheringProfile from "../../../../assets/images/GatheringProfile.svg";
import dummy from "../../../../utils/data/dummy.json";

interface IGatheringInfo {
  GatheringName: string;
  GatheringGoal: string;
  GatheringManager: string;
  Towner: Array<string>;
}

interface IGatheringDesc {
  GatheringData: IGatheringInfo;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const GatheringDesc = ({
  GatheringData,
  isEdit,
  setIsEdit,
}: IGatheringDesc) => {
  const gathering = dummy.gathering.find(
    (element) => element["townID"] === "town1"
  );
  if (!gathering) {
    return null;
  }
  const townRoutine: Array<{ routineName: string; routineDay: string[] }> =
    gathering!["townRoutine"];

  const handleEdit = () => {};
  return (
    <GatheringDescContainer>
      <GatheringDescTop>
        <GatheringDescTitle>{GatheringData.GatheringName}</GatheringDescTitle>
        <GatheringEditBtn
          onClick={() => setIsEdit(!isEdit)}
          style={{ backgroundImage: `url(${EditIcon})` }}
        />
      </GatheringDescTop>
      <GatheringDescMiddle>
        <GatheringProfileImg
          style={{ backgroundImage: `url(${GatheringProfile})` }}
        />
        <GatheringExplainWrapper>
          <GatheringExplain>
            <GatheringDescLightText>타운 목표</GatheringDescLightText>
            <GatheringDescText>{GatheringData.GatheringGoal}</GatheringDescText>
          </GatheringExplain>
          <GatheringExplain>
            <GatheringDescLightText>타운 주민수</GatheringDescLightText>
            <GatheringDescText>{GatheringData.Towner.length}</GatheringDescText>
          </GatheringExplain>
          <GatheringExplain>
            <GatheringDescLightText>타운 대표</GatheringDescLightText>
            <GatheringDescText>
              {GatheringData.GatheringManager}
            </GatheringDescText>
          </GatheringExplain>
        </GatheringExplainWrapper>
      </GatheringDescMiddle>

      <GatheringDescBottom>
        <GatheringDescLightText>고정 루틴 투두</GatheringDescLightText>
        {townRoutine.map((routine) => (
          <GatheringDescBlock>
            <GatheringDescText>{routine.routineName}</GatheringDescText>
            <GatheringDescLightText>
              {routine.routineDay}
            </GatheringDescLightText>
          </GatheringDescBlock>
        ))}
      </GatheringDescBottom>
    </GatheringDescContainer>
  );
};

export default GatheringDesc;
