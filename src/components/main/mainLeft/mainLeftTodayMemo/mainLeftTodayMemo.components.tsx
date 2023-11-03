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

import { themeColor } from "../../../../recoil/recoil";
import { useRecoilValue } from "recoil";

const MainLeftTodayMemo = () => {
  // state
  const [currentFontSize, setCurrentFontSize] = useState<string>("18");
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [date, setDate] = useState<number>();
  const [message, setMessage] = useState<string>("");

  const theme = useRecoilValue(themeColor);

  const [textColor, setTextColor] = useState<string>("#5F5F5F");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FCFCFC");
  const [lightBackgroundColor, setLightBackgroundColor] = useState<string>("#F4F3F6");

  useEffect(() => {
    if (theme === "1") {
      setTextColor("#FCFCFC");
      setBackgroundColor("#3D3D3D");
      setLightBackgroundColor("#636363");
    } else {
      setTextColor("#5F5F5F");
      setBackgroundColor("#FCFCFC");
      setLightBackgroundColor("#F4F3F6");
    }

  }, [theme]);
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
    <MainLeftTodayMemoContainer backgroundColor={backgroundColor}>
      <MainLeftTodayMemoSvgContainer>
        <MainLeftTodayMemoSvg src={MemoSvg}/>
        <MainLeftTodayMemoSvg src={MemoSvg}/>
      </MainLeftTodayMemoSvgContainer>
      <MainLeftTodayMemoDate>
        <MainLeftTodayMemoYear textColor={textColor} lightBackgroundColor={lightBackgroundColor}>{year}년</MainLeftTodayMemoYear>
        <MainLeftTodayMemoMonth textColor={textColor} lightBackgroundColor={lightBackgroundColor}>{month}월</MainLeftTodayMemoMonth>
        <MainLeftTodayMemoDay textColor={textColor} lightBackgroundColor={lightBackgroundColor}>{date}일</MainLeftTodayMemoDay>
      </MainLeftTodayMemoDate>
      <MainLeftTodayMemoContent backgroundColor={lightBackgroundColor} onChange={(event) => handleContent(event)} value={message} style={{fontSize:`${currentFontSize}px`}} />
      <MainLeftTodayMemoSizeWrapper>
        <MainLeftTodayMemoSize setFontSize={setCurrentFontSize}/>
      </MainLeftTodayMemoSizeWrapper>
    </MainLeftTodayMemoContainer>
  )
}

export default MainLeftTodayMemo;