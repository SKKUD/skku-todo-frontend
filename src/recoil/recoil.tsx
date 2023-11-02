import React from "react";
import { atom } from "recoil";

// 현재 유저(로그인한 유저)의 userid
export const themeColor = atom({
  key: "themeColor",
  default: "0",
});