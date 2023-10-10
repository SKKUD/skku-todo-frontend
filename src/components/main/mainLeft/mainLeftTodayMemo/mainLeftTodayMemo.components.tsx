import React, { useEffect, useState } from "react";

// import styled-components
import { 
  MainLeftTodayMemoContainer,
  MainLeftTodayMemoDate,
  MainLeftTodayMemoContent,
  MainLeftTodayMemoSizeWrapper,
} from "./mainLeftTodayMemo.styles";

import MainLeftTodayMemoSize from "./mainLeftTodayMemoSize/mainLeftTodayMemoSize.components";

const MainLeftTodayMemo = () => {
  // state
  const [currentFontSize, setCurrentFontSize] = useState<string>("14");
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [date, setDate] = useState<number>();
  
  // get date
  useEffect(() => {
    let today = new Date();   
    
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1)
    setDate(today.getDay())
  }, [])

  return (
    <MainLeftTodayMemoContainer>
      <MainLeftTodayMemoDate>{year}년 {month}월 {date}일</MainLeftTodayMemoDate>
      <MainLeftTodayMemoContent style={{fontSize:`${currentFontSize}px`}} />
      <MainLeftTodayMemoSizeWrapper>
        <MainLeftTodayMemoSize setFontSize={setCurrentFontSize}/>
      </MainLeftTodayMemoSizeWrapper>
    </MainLeftTodayMemoContainer>
  )
}

export default MainLeftTodayMemo;