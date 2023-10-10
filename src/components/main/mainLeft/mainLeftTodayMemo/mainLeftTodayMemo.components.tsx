import React, { useState } from "react";

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
  
  return (
    <MainLeftTodayMemoContainer>
      <MainLeftTodayMemoDate>2023년 9월 24일</MainLeftTodayMemoDate>
      <MainLeftTodayMemoContent style={{fontSize:`${currentFontSize}px`}} />
      <MainLeftTodayMemoSizeWrapper>
        <MainLeftTodayMemoSize setFontSize={setCurrentFontSize}/>
      </MainLeftTodayMemoSizeWrapper>
    </MainLeftTodayMemoContainer>
  )
}

export default MainLeftTodayMemo;