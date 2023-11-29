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

const GatheringDesc = () => {
  const gathering = dummy.gathering.find(
    (element) => element["townID"] === "town1"
  );
  if (!gathering) {
    return null;
  }
  const townRoutine: Array<{ routineName: string; routineDay: string[] }> =
    gathering!["townRoutine"];

  return (
    <GatheringDescContainer>
      <GatheringDescTop>
        <GatheringDescTitle>{gathering!["townName"]}</GatheringDescTitle>
        <GatheringEditBtn style={{ backgroundImage: `url(${EditIcon})` }} />
      </GatheringDescTop>
      <GatheringDescMiddle>
        <GatheringProfileImg
          style={{ backgroundImage: `url(${GatheringProfile})` }}
        />
        <GatheringExplainWrapper>
          <GatheringExplain>
            <GatheringDescLightText>타운 목표</GatheringDescLightText>
            <GatheringDescText>{gathering["townGoal"]}</GatheringDescText>
          </GatheringExplain>
          <GatheringExplain>
            <GatheringDescLightText>타운 주민수</GatheringDescLightText>
            <GatheringDescText>{gathering["townMemberNum"]}</GatheringDescText>
          </GatheringExplain>
          <GatheringExplain>
            <GatheringDescLightText>타운 대표</GatheringDescLightText>
            <GatheringDescText>{gathering["townManager"]}</GatheringDescText>
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
