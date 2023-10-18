import React from "react";

import { FC } from "react";

import { 
  MakeGatheringContainer,
  MakeGatheringHeader,
  MakeGatheringHeaderTitle,
  MakeGatheringHeaderDescription,
  MakeGatheringContent,
  MakeGatheringThumbnailContainer,
  MakeGatheringThumbnailTitle,
  MakeGatheringThumbnail,
  MakeGatheringThumbnailSvg,
  MakeGatheringThumbnailDefaultContainer,
  MakeGatheringThumbnailDefaultBox,
  MakeGatheringThumbnailDefaultDescription,
  MakeGatheringTextAreaContainer,
  MakeGatheringLabel,
  MakeGatheringTextArea,
  MakeGatheringButton,
} from "./MakeGatheringModal.styles";

import Thumbnail from "../../../../../../assets/images/Gathering.svg";

interface IMakeGatheringModal {
  handleModalClose: () => void;
}

const MakeGatheringModal: FC<IMakeGatheringModal> = ({ handleModalClose })=> {
  return (
    <MakeGatheringContainer>
      {/* Header */}
      <MakeGatheringHeader>
        <MakeGatheringHeaderTitle>
          모임 생성
        </MakeGatheringHeaderTitle>
        <MakeGatheringHeaderDescription>
          모임을 만들어 친구들과 목표를 공유해 보세요.
        </MakeGatheringHeaderDescription>
      </MakeGatheringHeader>

      {/* content */}
      <MakeGatheringContent>
        {/* Thumbnail */}
        <MakeGatheringThumbnailContainer>
          <MakeGatheringThumbnailTitle>모임 섬네일</MakeGatheringThumbnailTitle>

          <MakeGatheringThumbnail>
            <MakeGatheringThumbnailSvg src={Thumbnail}/>
          </MakeGatheringThumbnail>
          
          <MakeGatheringThumbnailDefaultContainer>
            <MakeGatheringThumbnailDefaultBox />
            <MakeGatheringThumbnailDefaultDescription>
              기본이미지 사용하기
            </MakeGatheringThumbnailDefaultDescription>
          </MakeGatheringThumbnailDefaultContainer>
        </MakeGatheringThumbnailContainer>

        {/* info */}
        <MakeGatheringTextAreaContainer>
          <MakeGatheringLabel>모임 이름</MakeGatheringLabel>
          <MakeGatheringTextArea />

          <MakeGatheringLabel>모임 목표</MakeGatheringLabel>
          <MakeGatheringTextArea />
        </MakeGatheringTextAreaContainer>
      </MakeGatheringContent>

      {/* Button */}
      <MakeGatheringButton onClick={handleModalClose}>생성하기</MakeGatheringButton>
    </MakeGatheringContainer>
  );
};

export default MakeGatheringModal;