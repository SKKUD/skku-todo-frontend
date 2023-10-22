import React from "react";
import { FC } from "react";

import { Popover } from "@mui/material";

import { 
  MainLeftTodayMemoSizePopOverContainer,
  MainLeftTodayMemoSizePopOverInner
} from "./mainLeftTodayMemoSizePopover.styles";

interface IMainLeftTodayMemoSizePopOver {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
}

const MainLeftTodayMemoSizePopover: FC<IMainLeftTodayMemoSizePopOver> = ({
  open,
  anchorEl,
  handleClose,
  setFontSize,
}) => {
  const handleSmall = () => {
    setFontSize("12");
    localStorage.setItem("message_fontSize", "12");
  }

  const handleMiddle = () => {
    setFontSize("18")
    localStorage.setItem("message_fontSize", "18");
  }

  const handleBig = () => {
    setFontSize("24")
    localStorage.setItem("message_fontSize", "24");
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MainLeftTodayMemoSizePopOverContainer>
        <MainLeftTodayMemoSizePopOverInner onClick={handleSmall} style={{fontSize: "12px"}}>작게</MainLeftTodayMemoSizePopOverInner>
        <MainLeftTodayMemoSizePopOverInner onClick={handleMiddle} style={{fontSize: "18px"}}>보통</MainLeftTodayMemoSizePopOverInner>
        <MainLeftTodayMemoSizePopOverInner onClick={handleBig} style={{fontSize: "24px"}}>크게</MainLeftTodayMemoSizePopOverInner>
      </MainLeftTodayMemoSizePopOverContainer>
    </Popover>
  )
}

export default MainLeftTodayMemoSizePopover;