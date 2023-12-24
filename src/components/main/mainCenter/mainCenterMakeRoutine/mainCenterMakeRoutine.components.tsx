import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";

import {
  MainCenterMakeRoutineContainer,
  MainCenterMakeRoutineDayButton,
  MainCenterMakeRoutineDatePicker,
  MainCenterMakeRoutineDateText,
  MainCenterMakeRoutineDayText,
} from "./mainCenterMakeRoutine.styles";

import dummy from "../../../../utils/data/dummy.json";
interface IRoutine {
  routineDay?: string[] | undefined | null;
  routineEndDate?: string | undefined | null;
}
interface IMainCenterMakeRoutine {
  routine: IRoutine;
  setRoutine: React.Dispatch<React.SetStateAction<IRoutine>>;
  todoID: string;
  goalID: string;
}

const MainCenterMakeRoutine = ({
  routine,
  setRoutine,
  todoID,
  goalID,
}: IMainCenterMakeRoutine) => {
  const day: string[] = ["월", "화", "수", "목", "금", "토", "일"];
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
  useEffect(() => {
    setRoutine({
      routineDay: clicked,
      routineEndDate: endDate,
    });
  }, [clicked, endDate, setRoutine]);

  return (
    <MainCenterMakeRoutineContainer>
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
        // className={`${endDate ? "date-picked" : ""}`}
      />
    </MainCenterMakeRoutineContainer>
  );
};

export default MainCenterMakeRoutine;
