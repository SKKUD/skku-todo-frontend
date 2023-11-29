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

const GatheringDesc = () => {
  return (
    <GatheringDescContainer>
      <GatheringDescTop>
        <GatheringDescTitle>스꾸디 2팀</GatheringDescTitle>
        <GatheringEditBtn style={{ backgroundImage: `url(${EditIcon})` }} />
      </GatheringDescTop>
      <GatheringDescMiddle>
        <GatheringProfileImg
          style={{ backgroundImage: `url(${GatheringProfile})` }}
        />
        <GatheringExplainWrapper>
          <GatheringExplain>
            <GatheringDescLightText>타운 목표</GatheringDescLightText>
            <GatheringDescText>투두타운</GatheringDescText>
          </GatheringExplain>
          <GatheringExplain>
            <GatheringDescLightText>타운 주민수</GatheringDescLightText>
            <GatheringDescText>7</GatheringDescText>
          </GatheringExplain>
          <GatheringExplain>
            <GatheringDescLightText>타운 대표</GatheringDescLightText>
            <GatheringDescText>강유진</GatheringDescText>
          </GatheringExplain>
        </GatheringExplainWrapper>
      </GatheringDescMiddle>

      <GatheringDescBottom>
        <GatheringDescLightText>고정 루틴 투두</GatheringDescLightText>
        <GatheringDescBlock>
          <GatheringDescText>디자인팀 스터디</GatheringDescText>
          <GatheringDescLightText>목</GatheringDescLightText>
        </GatheringDescBlock>
        <GatheringDescBlock>
          <GatheringDescText>디자인팀 스터디</GatheringDescText>
          <GatheringDescLightText>월, 수</GatheringDescLightText>
        </GatheringDescBlock>
      </GatheringDescBottom>
    </GatheringDescContainer>
  );
};

export default GatheringDesc;
