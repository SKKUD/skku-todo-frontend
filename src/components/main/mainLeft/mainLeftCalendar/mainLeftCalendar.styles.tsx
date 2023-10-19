import styled from "@emotion/styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const MainLeftCalendarContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CalendarDaysContainer = styled.div`
  display: flex;
`

export const CalendarCellsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const CalendarCellRows = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;