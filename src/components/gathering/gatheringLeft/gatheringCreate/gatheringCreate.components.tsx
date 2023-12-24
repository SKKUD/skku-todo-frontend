import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  MakeGatheringContainer,
  MakeGatheringHeader,
  MakeGatheringHeaderTitle,
  MakeGatheringHeaderDescription,
  MakeGatheringContent,
  MakeGatheringThumbnailContainer,
  MakeGatheringTitle,
  MakeGatheringThumbnail,
  MakeGatheringThumbnailSvg,
  MakeGatheringThumbnailDefaultContainer,
  MakeGatheringThumbnailDefaultBox,
  MakeGatheringThumbnailDefaultDescription,
  MakeGatheringTextAreaContainer,
  MakeGatheringLabel,
  MakeGatheringTextArea,
  MakeGatheringButton,
  MakeGatheringRoutine,
  MakeGatheringRoutineTextArea,
  MakeGatheringRoutineAddBtn,
  MakeGatheringRoutineWrapper,
  MakeGatheringRoutineContainer,
} from "./gatheringCreate.styles";

import MainCenterMakeRoutine from "../../../main/mainCenter/mainCenterMakeRoutine/mainCenterMakeRoutine.components";
import Thumbnail from "../../../../assets/images/Gathering.svg";
import {
  MainCenterMakeRoutineContainer,
  MainCenterMakeRoutineDatePicker,
  MainCenterMakeRoutineDateText,
  MainCenterMakeRoutineDayButton,
  MainCenterMakeRoutineDayText,
} from "../../../main/mainCenter/mainCenterMakeRoutine/mainCenterMakeRoutine.styles";

interface IGatheringCreateDesc {
  isCreateLink: boolean;
  setIsCreateLink: React.Dispatch<React.SetStateAction<boolean>>;
}

const GatheringCreate = ({
  isCreateLink,
  setIsCreateLink,
}: IGatheringCreateDesc) => {
  const day: string[] = ["월", "화", "수", "목", "금", "토", "일", "매일"];
  // 요일 선택
  const [clicked, setClicked] = useState<string[]>([]);
  const handleClickDay = (day: string) => {
    clicked.includes(day)
      ? setClicked(clicked.filter((clickedDay) => clickedDay !== day))
      : setClicked([...clicked, day]);
  };

  // 날짜 선택
  const [endDate, setEndDate] = useState<string>("");
  const handleClickDate = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };
  const handleCreateLink = () => {
    setIsCreateLink(true);
    console.log(isCreateLink);
  };

  return (
    <MakeGatheringContainer>
      <MakeGatheringHeader>
        <MakeGatheringHeaderTitle>타운 만들기</MakeGatheringHeaderTitle>
        <MakeGatheringHeaderDescription>
          투두 타운을 만들어 친구들과 목표를 공유해보세요.
        </MakeGatheringHeaderDescription>
      </MakeGatheringHeader>
      {/* content */}
      <MakeGatheringContent>
        {/* Thumbnail */}
        <MakeGatheringThumbnailContainer>
          <MakeGatheringTitle>모임 섬네일</MakeGatheringTitle>

          <MakeGatheringThumbnail>
            <MakeGatheringThumbnailSvg src={Thumbnail} />
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
          <MakeGatheringLabel>타운 이름</MakeGatheringLabel>
          <MakeGatheringTextArea />

          <MakeGatheringLabel>타운 목표</MakeGatheringLabel>
          <MakeGatheringTextArea />
        </MakeGatheringTextAreaContainer>
      </MakeGatheringContent>
      <MakeGatheringRoutineWrapper>
        <MakeGatheringTitle>고정 루틴 투두</MakeGatheringTitle>
        <MakeGatheringRoutineAddBtn>투두 추가</MakeGatheringRoutineAddBtn>
      </MakeGatheringRoutineWrapper>
      <MakeGatheringRoutineTextArea></MakeGatheringRoutineTextArea>
      <MakeGatheringRoutineContainer>
        {/* 요일 선택 */}
        <MainCenterMakeRoutineDayText>요일</MainCenterMakeRoutineDayText>
        {day.map((day, index) => {
          return (
            <MainCenterMakeRoutineDayButton
              key={index}
              onClick={() => handleClickDay(day)}
              className={`${clicked.includes(day) ? "clicked" : ""}`}
            >
              {day}
            </MainCenterMakeRoutineDayButton>
          );
        })}

        {endDate && (
          <>
            <MainCenterMakeRoutineDateText>
              {endDate}까지
            </MainCenterMakeRoutineDateText>
          </>
        )}
        {/* 날짜 선택 */}
        <MainCenterMakeRoutineDatePicker
          type={"date"}
          onChange={handleClickDate}
        />
      </MakeGatheringRoutineContainer>
      {/* Button */}
      <MakeGatheringButton onClick={handleCreateLink}>
        생성하기
      </MakeGatheringButton>
    </MakeGatheringContainer>
  );
};

export default GatheringCreate;
