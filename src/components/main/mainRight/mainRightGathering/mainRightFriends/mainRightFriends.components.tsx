import React from "react";

import {
  MainRightFriendsWrapper,
  MainRightFriendsIcon,
  MainRightAddFriendsBtn,
  MainRightAddFriendsBtnContainer,
} from "./mainRightFriends.styles";

import Img from "../../../../../assets/images/profile.jpeg";
import GatheringPlus from "../../../../../assets/images/GatheringPlus.svg";

const MainRightFriends = () => {
  return (
    <MainRightFriendsWrapper>
      <MainRightFriendsIcon src={Img} />
      <MainRightAddFriendsBtnContainer>
        <MainRightAddFriendsBtn className="add_friends_btn" src={GatheringPlus} />
      </MainRightAddFriendsBtnContainer>
    </MainRightFriendsWrapper>
  );
};

export default MainRightFriends;
