import React, { useState } from 'react';

// import styled components
import { 
  MainLeftCalendarContainer,
  CalendarDaysContainer,
  CalendarCellsContainer,
  CalendarHeaderContainer,
  CalendarCellRows
} from "./mainLeftCalendar.styles";

import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

interface IRenderHeader {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
}

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }: IRenderHeader) => {
  return (
      <CalendarHeaderContainer>
          <div className="col col-start">
              <span className="text">
                  <span className="text month">
                      {format(currentMonth, 'M')}월
                  </span>
                  {format(currentMonth, 'yyyy')}
              </span>
          </div>
          <div className="col col-end">
              <div onClick={prevMonth}>이전</div>
              <div onClick={nextMonth}>이후</div>
          </div>
      </CalendarHeaderContainer>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
      days.push(
          <div className="col" key={i}>
              {date[i]}
          </div>,
      );
  }

  return <CalendarDaysContainer>{days}</CalendarDaysContainer>;
};

interface IRenderCells {
  currentMonth: any;
  selectedDate: any;
  onDateClick: any;
}

const RenderCells = ({ currentMonth, selectedDate, onDateClick }: IRenderCells) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
          formattedDate = format(day, 'd');
          const cloneDay = day;
          days.push(
              <div
                  className={`col cell ${
                      !isSameMonth(day, monthStart)
                          ? 'disabled'
                          : isSameDay(day, selectedDate)
                          ? 'selected'
                          : format(currentMonth, 'M') !== format(day, 'M')
                          ? 'not-valid'
                          : 'valid'
                  }`}
                  // key={day}
                  // onClick={() => onDateClick(parse(cloneDay))}
              >
                  <span
                      className={
                          format(currentMonth, 'M') !== format(day, 'M')
                              ? 'text not-valid'
                              : ''
                      }
                  >
                      {formattedDate}
                  </span>
              </div>,
          );
          day = addDays(day, 1);
      }
      rows.push(
          <CalendarCellRows>
              {days}
          </CalendarCellRows>,
      );
      days = [];
  }
  return <CalendarCellsContainer>{rows}</CalendarCellsContainer>;
};

const MainLeftCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day: any) => {
        setSelectedDate(day);
    };
    return (
      <MainLeftCalendarContainer className="calendar">
          <RenderHeader
              currentMonth={currentMonth}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
          />
          <RenderDays />
          <RenderCells
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
          />
      </ MainLeftCalendarContainer>
  );
}

export default MainLeftCalendar;