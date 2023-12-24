import React, { MouseEvent } from "react";

import {
  CopyIcon,
  GatheringLinkContainer,
  GatheringLinkContent,
  GatheringLinkField,
  GatheringLinkLabel,
  GatheringLinkTitle,
  GatheringLinkWrapper,
} from "./gatheringCreateLink.styles";

import Copy from "../../../../assets/images/copy.svg";

const GatheringCreateLink = () => {
  let link: string = "https://todowhatever.invitationlink";
  const handleLinkCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert("copied to clipboard");
    } catch (error) {
      alert("failed to copy");
    }
  };
  return (
    <GatheringLinkContainer>
      <GatheringLinkTitle>타운 초대 링크 생성</GatheringLinkTitle>
      <GatheringLinkContent>
        링크를 받은 상대가 수락하면, 타운에 가입됩니다.
      </GatheringLinkContent>
      <GatheringLinkWrapper>
        <GatheringLinkLabel>타운 초대 링크</GatheringLinkLabel>
        <GatheringLinkField>
          {link}
          <CopyIcon src={Copy} onClick={handleLinkCopy} />
        </GatheringLinkField>
      </GatheringLinkWrapper>
    </GatheringLinkContainer>
  );
};

export default GatheringCreateLink;
