import React, { useEffect, useState } from "react";

import { ChangeEvent } from "react";

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
  const [currentFontSize, setCurrentFontSize] = useState<string>("18");
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [date, setDate] = useState<number>();
  const [message, setMessage] = useState<string>("");

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  useEffect(() => {
    if (message) {
      localStorage.setItem("message_content", message);
    }
  }, [message])

  // get date
  useEffect(() => {
    // Date
    const today = new Date();   
    // parse Date
    setYear(today.getFullYear()); 
    setMonth(today.getMonth() + 1)
    setDate(today.getDate())
    
    // message
    if (localStorage.getItem("message_content")) {
      setMessage(localStorage.getItem("message_content")!)
    }

    if (localStorage.getItem("message_fontSize")) {
      setCurrentFontSize(localStorage.getItem("message_fontSize")!)
    }
  }, [])

  return (
    <MainLeftTodayMemoContainer>
      <MainLeftTodayMemoDate>{year}년 {month}월 {date}일</MainLeftTodayMemoDate>
      <MainLeftTodayMemoContent onChange={(event) => handleContent(event)} value={message} style={{fontSize:`${currentFontSize}px`}} />
      <MainLeftTodayMemoSizeWrapper>
        <MainLeftTodayMemoSize setFontSize={setCurrentFontSize}/>
      </MainLeftTodayMemoSizeWrapper>
    </MainLeftTodayMemoContainer>
  )
}

export default MainLeftTodayMemo;