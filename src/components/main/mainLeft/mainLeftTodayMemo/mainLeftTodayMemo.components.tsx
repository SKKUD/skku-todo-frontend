import React, { useEffect, useState } from "react";

import { ChangeEvent } from "react";

// import styled-components
import { 
  MainLeftTodayMemoContainer,
  MainLeftTodayMemoDate,
  MainLeftTodayMemoYear,
  MainLeftTodayMemoMonth,
  MainLeftTodayMemoDay,
  MainLeftTodayMemoContent,
  MainLeftTodayMemoSizeWrapper,
  MainLeftTodayMemoSvgContainer,
  MainLeftTodayMemoSvg,
} from "./mainLeftTodayMemo.styles";

import MainLeftTodayMemoSize from "./mainLeftTodayMemoSize/mainLeftTodayMemoSize.components";
import MemoSvg from "../../../../assets/images/Memo.svg";

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
      <MainLeftTodayMemoSvgContainer>
        <MainLeftTodayMemoSvg src={MemoSvg}/>
        <MainLeftTodayMemoSvg src={MemoSvg}/>
      </MainLeftTodayMemoSvgContainer>
      <MainLeftTodayMemoDate>
        <MainLeftTodayMemoYear>{year}년</MainLeftTodayMemoYear>
        <MainLeftTodayMemoMonth>{month}월</MainLeftTodayMemoMonth>
        <MainLeftTodayMemoDay>{date}일</MainLeftTodayMemoDay>
      </MainLeftTodayMemoDate>
      <MainLeftTodayMemoContent onChange={(event) => handleContent(event)} value={message} style={{fontSize:`${currentFontSize}px`}} />
      <MainLeftTodayMemoSizeWrapper>
        <MainLeftTodayMemoSize setFontSize={setCurrentFontSize}/>
      </MainLeftTodayMemoSizeWrapper>
    </MainLeftTodayMemoContainer>
  )
}

export default MainLeftTodayMemo;