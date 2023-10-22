import React from "react";

import { FC } from "react";

import { Popover } from "@mui/material";

import { 
  SystemPopoverConatiner,
  SystemPopoverInner
} from "./SystemPopover.styles";
interface ISystemPopover {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
}

const SystemPopOver: FC<ISystemPopover>  = ({
  open,
  anchorEl,
  handleClose,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <SystemPopoverConatiner>
        <SystemPopoverInner>로그아웃</SystemPopoverInner>
        <SystemPopoverInner>회원탈퇴</SystemPopoverInner>
      </SystemPopoverConatiner>
    </Popover>
  )
};

export default SystemPopOver;