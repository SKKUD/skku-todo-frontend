import React, { useEffect } from "react";
import { useState } from "react";

// import styled components
import { 
  MainLeftCalendarContainer,
  MainLeftCalendarBox,
  MainLeftCalendarContent,
} from "./mainLeftCalendar.styles";

// import Calendar library
import Calendar from 'react-calendar';

// type for Calendar
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const MainLeftCalendar = () => {
  // useState 훅의 초기값으로 현재 날짜를 넣어줌
  const [today, setToday] = useState(new Date()); 

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = () => {
    setToday(today);
  };

  return (
    <MainLeftCalendarContainer>
      <MainLeftCalendarBox>
        <MainLeftCalendarContent locale="en" onChange={onChangeToday} value={today} />
      </MainLeftCalendarBox>
    </MainLeftCalendarContainer>
  )
}

export default MainLeftCalendar;