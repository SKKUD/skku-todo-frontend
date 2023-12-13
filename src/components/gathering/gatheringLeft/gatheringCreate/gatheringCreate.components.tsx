import React from "react";

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
} from "./gatheringCreate.styles";

import Thumbnail from "../../../../assets/images/Gathering.svg";

const GatheringCreate = () => {
  return (
    <MakeGatheringContainer>
      <MakeGatheringHeader>
        <MakeGatheringHeaderTitle>
          타운 만들기
        </MakeGatheringHeaderTitle>
        <MakeGatheringHeaderDescription>
          투두 타운을 만들어 친구들과 목표를 공유해보세요.       
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
      <MakeGatheringButton>생성하기</MakeGatheringButton>
    </MakeGatheringContainer>
  )
};

export default GatheringCreate;