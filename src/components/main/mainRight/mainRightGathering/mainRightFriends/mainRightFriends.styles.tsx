import styled from "@emotion/styled";

export const MainRightFriendsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 17px;
  gap: 8px;
  padding-left: 10px;
`;

export const MainRightFriendsIcon = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const MainRightAddFriendsBtnContainer = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: #f3f2f0;
  border: none;

  &:hover {
    .add_friends_btn {
      width: 20px;
      height: 20px;
      transition: all 0.3s;
    }
  }
`;

export const MainRightAddFriendsBtn = styled.img`
  width: 16px;
  height: 16px;
`;
