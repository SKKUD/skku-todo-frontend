import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";

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
  MakeGatheringRoutineTextArea,
  MakeGatheringRoutineAddBtn,
  MakeGatheringRoutineWrapper,
  MakeGatheringRoutineContainer,
  MakeGatheringBtn,
  MakeGatheringTodoBox,
  GatheringTodoBox,
  IconImg,
  IconWrapper,
} from "../gatheringCreate/gatheringCreate.styles";

import {
  DeleteGatheringBtn,
  EditGatheringBtn,
  ButtonWrapper,
} from "./gatheringEdit.styles";

import Thumbnail from "../../../../assets/images/Gathering.svg";
import EditIcon from "../../../../assets/images/edit.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import {
  MainCenterMakeRoutineDatePicker,
  MainCenterMakeRoutineDateText,
  MainCenterMakeRoutineDayButton,
  MainCenterMakeRoutineDayText,
} from "../../../main/mainCenter/mainCenterMakeRoutine/mainCenterMakeRoutine.styles";

interface IGatheringEdit {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
const GatheringEdit = ({ isEdit, setIsEdit }: IGatheringEdit) => {
  const day: string[] = ["월", "화", "수", "목", "금", "토", "일", "매일"];
  const [routineStr, setRoutineStr] = useState<string>("");
  // 요일 선택
  const [clicked, setClicked] = useState<string[]>([]);
  const handleClickDay = (day: string) => {
    clicked.includes(day)
      ? setClicked(clicked.filter((clickedDay) => clickedDay !== day))
      : setClicked([...clicked, day]);
  };
  useEffect(() => {
    if (clicked.length !== 0) {
      setRoutineStr(" (" + clicked + ")");
    }
  }, [clicked]);
  const [addFinished, setAddFinished] = useState<boolean>(false);
  // 날짜 선택
  const [endDate, setEndDate] = useState<string>("");
  const handleClickDate = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const [gatheringRoutine, setGatheringRoutine] = useState<string>("");
  const [gatheringRoutineList, setGatheringRoutineList] = useState<
    Array<string>
  >([]);

  const handleRoutineAdd = () => {
    setGatheringRoutineList([
      ...gatheringRoutineList,
      gatheringRoutine + routineStr,
    ]);
    setGatheringRoutine("");
    setRoutineStr("");
    setClicked([]);
    setEndDate("");
    setAddFinished(true);
  };
  const handleOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setGatheringRoutine(event.target.value);
  };
  const handleTodo = () => {
    setAddFinished(false);
  };

  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <MakeGatheringContainer>
      <MakeGatheringHeader>
        <MakeGatheringHeaderTitle>타운 수정하기</MakeGatheringHeaderTitle>
        <MakeGatheringHeaderDescription>
          나만의 투두타운을 수정해보세요.
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
      <GatheringTodoBox>
        <MakeGatheringRoutineWrapper>
          <MakeGatheringTitle>고정 루틴 투두</MakeGatheringTitle>
          <MakeGatheringRoutineAddBtn onClick={handleTodo}>
            투두 추가
          </MakeGatheringRoutineAddBtn>
        </MakeGatheringRoutineWrapper>

        {gatheringRoutineList.length !== 0 &&
          gatheringRoutineList.map((routine) => {
            return (
              <MakeGatheringTodoBox>
                {routine}
                <IconWrapper>
                  <IconImg src={EditIcon} onClick={handleEdit} />
                  <IconImg src={DeleteIcon} onClick={handleDelete} />
                </IconWrapper>
              </MakeGatheringTodoBox>
            );
          })}
        {addFinished ? (
          <></>
        ) : (
          <>
            {" "}
            <MakeGatheringTodoBox>
              <MakeGatheringRoutineTextArea
                onChange={handleOnChangeTextArea}
                value={gatheringRoutine}
              />
              <MakeGatheringBtn onClick={handleRoutineAdd}>
                확인
              </MakeGatheringBtn>
            </MakeGatheringTodoBox>
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
          </>
        )}
      </GatheringTodoBox>
      {/* Button */}
      <ButtonWrapper>
        <DeleteGatheringBtn>타운 삭제하기</DeleteGatheringBtn>
        <EditGatheringBtn onClick={() => setIsEdit(false)}>
          수정하기
        </EditGatheringBtn>
      </ButtonWrapper>
    </MakeGatheringContainer>
  );
};

export default GatheringEdit;
