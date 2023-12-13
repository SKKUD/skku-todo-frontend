import React from "react";

import { 
  EditGatheringContainer,
  EditGatheringHeader,
  EditGatheringHeaderTitle,
  EditGatheringHeaderDescription,
  EditGatheringContent,
  EditGatheringThumbnailContainer,
  EditGatheringThumbnailTitle,
  EditGatheringThumbnail,
  EditGatheringThumbnailSvg,
  EditGatheringThumbnailDefaultContainer,
  EditGatheringThumbnailDefaultBox,
  EditGatheringThumbnailDefaultDescription,
  EditGatheringTextAreaContainer,
  EditGatheringLabel,
  EditGatheringTextArea,
  EditGatheringButton,
} from "./gatheringEdit.styles";

import Thumbnail from "../../../../assets/images/Gathering.svg";

const GatheringEdit = () => {
  return (
    <EditGatheringContainer>
      <EditGatheringHeader>
        <EditGatheringHeaderTitle>
          타운 수정하기
        </EditGatheringHeaderTitle>
        <EditGatheringHeaderDescription>
          나만의 투두타운을 수정해보세요.        
        </EditGatheringHeaderDescription>
      </EditGatheringHeader>

      {/* content */}
      <EditGatheringContent>
        {/* Thumbnail */}
        <EditGatheringThumbnailContainer>
          <EditGatheringThumbnailTitle>모임 섬네일</EditGatheringThumbnailTitle>

          <EditGatheringThumbnail>
            <EditGatheringThumbnailSvg src={Thumbnail}/>
          </EditGatheringThumbnail>
          
          <EditGatheringThumbnailDefaultContainer>
            <EditGatheringThumbnailDefaultBox />
            <EditGatheringThumbnailDefaultDescription>
              기본이미지 사용하기
            </EditGatheringThumbnailDefaultDescription>
          </EditGatheringThumbnailDefaultContainer>
        </EditGatheringThumbnailContainer>

        {/* info */}
        <EditGatheringTextAreaContainer>
          <EditGatheringLabel>모임 이름</EditGatheringLabel>
          <EditGatheringTextArea />

          <EditGatheringLabel>모임 목표</EditGatheringLabel>
          <EditGatheringTextArea />
        </EditGatheringTextAreaContainer>
      </EditGatheringContent>

      {/* Button */}
      <EditGatheringButton>수정하기</EditGatheringButton>
    </EditGatheringContainer>
  )
};

export default GatheringEdit;
