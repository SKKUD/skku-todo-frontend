import styled from "@emotion/styled";

export const MainRightGatheringWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 17px;
  gap: 8px;
`;

export const MainRightGatheringIcon = styled.div`
  width: 83px;
  height: 83px;
  border-radius: 8px;
  background-size: cover; 
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &::before {
    position: absolute;
    content: "";
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    border-radius: 8px;
  }
`;

export const MainRightGatheringIconHeader = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`

export const MainRightGatheringIconHeaderCrown = styled.img`
  width: 12px;
  height: 12px;
  z-index: 100;
`;

export const MainRightGatheringIconheaderRight = styled.img`
  width: 12px;
  height: 12px;
  z-index: 100;

`

export const MainRightGatheringIconTitle = styled.div`
  width: 95%;
  padding-bottom: 5px;
  text-align: center;
  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  z-index: 100;
`;

export const MainRightAddGatheringBtn = styled.button`
  width: 83px;
  height: 83px;
  border-radius: 8px;
  background-color: #f3f2f0;
  border: none;
  &:hover {
    .gathering_plus_img {
      width: 28px;
      height: 28px;
      transition: all 0.3s;
    }
  }
`;

export const MainRightGatheringPlusImg = styled.img`
  width: 16px;
  height: 16px;
`;
