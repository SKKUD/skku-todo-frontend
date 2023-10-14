import React from "react";
import MainRightGatherings from "./mainRightGatherings/mainRightGatherings.components";
import MainRightFriends from "./mainRightFriends/mainRightFriends.components";
import {
  MainRightGatheringContainer,
  MainRightTitle,
} from "./mainRightGathering.styles";

const MainRightGathering = () => {
  return (
    <MainRightGatheringContainer>
      <MainRightTitle>강유진님의 모임</MainRightTitle>
      <MainRightGatherings />
      <MainRightFriends />
    </MainRightGatheringContainer>
  );
};

export default MainRightGathering;
