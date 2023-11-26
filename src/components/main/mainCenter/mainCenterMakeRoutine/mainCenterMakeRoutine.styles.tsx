import styled from "@emotion/styled";

import CalendarImg from "../../../../assets/images/calendar.svg";

export const MainCenterMakeRoutineContainer = styled.div`
  width: 95%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-left: 10px;
  padding: 15px;
  margin-top: -15px;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const MainCenterMakeRoutineDayText = styled.div`
  font-size: 12px;
  text-align: center;
  font-family: "Pretendard-Regular";
  color: #2c2c2c;
  font-weight: 700;
`;

export const MainCenterMakeRoutineDayButton = styled.button`
  width: 21px;
  height: 21px;
  border-radius: 2px;
  background-color: #f3f2f0;
  font-size: 12px;
  text-align: center;
  font-family: "Pretendard-Regular";
  color: #8c8c8c;
  font-weight: 700;
  border: none;
  padding: 0;
  &.clicked {
    color: #00dda8;
    border: 0.5px solid #00dda8;
  }
`;

export const MainCenterMakeRoutineDatePicker = styled.input`
  border: none;
  ::-webkit-datetime-edit {
    -webkit-appearance: none;
    display: none;
  }

  /* &.date-picked {
    ::-webkit-calendar-picker-indicator {
      -webkit-appearance: none;
      display: none;
    }
  } */
`;

export const MainCenterMakeRoutineDateText = styled.div`
  font-size: 10px;
  text-align: center;
  font-family: "Pretendard-Regular";
  color: #2c2c2c;
  font-weight: 400;
`;
