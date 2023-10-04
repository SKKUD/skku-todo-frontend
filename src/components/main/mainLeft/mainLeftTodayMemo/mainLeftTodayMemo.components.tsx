import React from "react";

// import styled-components
import { 
  MainLeftTodayMemoContainer,
  MainLeftTodayMemoDate,
  MainLeftTodayMemoContent,
} from "./mainLeftTodayMemo.styles";
const MainLeftTodayMemo = () => {
  return (
    <MainLeftTodayMemoContainer>
      <MainLeftTodayMemoDate>2023년 9월 24일</MainLeftTodayMemoDate>
      <MainLeftTodayMemoContent />
    </MainLeftTodayMemoContainer>
  )
}

export default MainLeftTodayMemo;