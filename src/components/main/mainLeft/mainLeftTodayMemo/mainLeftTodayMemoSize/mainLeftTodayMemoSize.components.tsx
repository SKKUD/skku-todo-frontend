import React from "react";
import { useState } from "react";

import { 
  MainLeftTodayMemoSizeContainer,
  MainLeftTodayMemoSizeBigText,
  MainLeftTodayMemoSizeSmallText,
} from "./mainLeftTodayMemoSize.styles";

import MainLeftTodayMemoSizePopover from "../mainLeftTodayMemoSizePopOver/mainLeftTodayMemoSizePopOver.components";

interface IMainLeftTodayMemoSize {
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MainLeftTodayMemoSize = ({setFontSize, onClick}: IMainLeftTodayMemoSize) => {
  // 팝업
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const PopoverOpen = Boolean(anchorEl);

  return (
    <>
      <MainLeftTodayMemoSizeContainer onClick={handleMenuClick}>
        <MainLeftTodayMemoSizeSmallText>T</MainLeftTodayMemoSizeSmallText>
        <MainLeftTodayMemoSizeBigText>T</MainLeftTodayMemoSizeBigText>
      </MainLeftTodayMemoSizeContainer>
      <MainLeftTodayMemoSizePopover
        open={PopoverOpen}
        anchorEl={anchorEl}
        handleClose={handlePopoverClose}
        setFontSize={setFontSize}
      />
    </>
  );
};

export default MainLeftTodayMemoSize;