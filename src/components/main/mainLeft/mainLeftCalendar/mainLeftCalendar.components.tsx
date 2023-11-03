import React, { useEffect, useState } from 'react';

// import styled components
import { 
  MainLeftCalendarContainer,
  CalendarDaysContainer,
  CalendarCellsContainer,
  CalendarHeaderContainer,
  CalendarCellRows,
  CalendarHeaderNext,
  CalendarHeaderPrevious,
  CalendarHeaderMonth,
  CalendarDaysContent,
  CalendarCell
} from "./mainLeftCalendar.styles";

import { useRecoilValue } from 'recoil';
import { themeColor } from '../../../../recoil/recoil';

import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

import MemoSvg from "../../../../assets/images/Memo.svg";

import { 
  MainLeftTodayMemoSvgContainer,
  MainLeftTodayMemoSvg,
} from '../mainLeftTodayMemo/mainLeftTodayMemo.styles';
interface IRenderHeader {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
  textColor: string;
  backgroundColor: string;
  lightBgColor: string;
}

const RenderHeader = ({ currentMonth, prevMonth, nextMonth, textColor, backgroundColor, lightBgColor }: IRenderHeader) => {
  return (
      <CalendarHeaderContainer>
        <CalendarHeaderPrevious themeColor={textColor} onClick={prevMonth}>이전</CalendarHeaderPrevious>
        <CalendarHeaderMonth textColor={textColor} lightBgColor={lightBgColor}>{format(currentMonth, 'M')}월</CalendarHeaderMonth>
        <CalendarHeaderNext themeColor={textColor} onClick={nextMonth}>이후</CalendarHeaderNext>
      </CalendarHeaderContainer>
  );
};

interface IRenderDays {
  textColor: string;
}
const RenderDays = ({textColor}: IRenderDays) => {
  const days = [];
  const date = ['일', '월', '화', '수', '목', '금', '토'];

  for (let i = 0; i < 7; i++) {
    days.push(
      <CalendarDaysContent textColor={textColor} key={i}>
        {date[i]}
      </CalendarDaysContent>,
    );
  }

  return <CalendarDaysContainer>{days}</CalendarDaysContainer>;
};

interface IRenderCells {
  currentMonth: any;
  selectedDate: any;
  onDateClick: any;
  textColor: string;
  backgroundColor: string;
  lightBgColor: string;
}

const RenderCells = ({ currentMonth, selectedDate, onDateClick, textColor, backgroundColor, lightBgColor}: IRenderCells) => {
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
              <CalendarCell
                  lightBgColor={lightBgColor}
                  textColor={textColor}
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
              </CalendarCell>,
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

    const theme = useRecoilValue(themeColor);

    const [textColor, setTextColor] = useState<string>("#5F5F5F");
    const [backgroundColor, setBackgroundColor] = useState<string>("#FCFCFC");
    const [lightBgColor, setLightBgColor] = useState<string>("#F5F4F6");

    useEffect(() => {
      if (theme === "1") {
        setTextColor("#FCFCFC");
        setBackgroundColor("#5F5F5F");
        setLightBgColor("#8C8C8C");
      } else {
        setTextColor("#5F5F5F");
        setBackgroundColor("#FCFCFC");
        setLightBgColor("#F5F4F6");
      }
    }, [theme]);

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
      <MainLeftCalendarContainer backgroundColor={backgroundColor} className="calendar">
          {/* <MainLeftTodayMemoSvgContainer>
            <MainLeftTodayMemoSvg src={MemoSvg}/>
            <MainLeftTodayMemoSvg src={MemoSvg}/>
          </MainLeftTodayMemoSvgContainer> */}
          <RenderHeader
              currentMonth={currentMonth}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
              textColor={textColor}
              backgroundColor={backgroundColor}
              lightBgColor={lightBgColor}
          />
          <RenderDays textColor={textColor}/>
          <RenderCells
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
              textColor={textColor}
              backgroundColor={backgroundColor}
              lightBgColor={lightBgColor}
          />
      </ MainLeftCalendarContainer>
  );
}

export default MainLeftCalendar;