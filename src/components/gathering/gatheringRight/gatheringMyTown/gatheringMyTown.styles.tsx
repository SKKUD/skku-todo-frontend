import styled from "@emotion/styled";

export const GatheringMyTownContainer = styled.div`
  width: 100%;

  border-radius: 8px;
  background: var(--white, #FCFCFC);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GatheringMyTownTitle = styled.p`
  width: 90%;
  text-align: start;
  margin: auto;

  color: var(--grey1, #5F5F5F);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;

  padding-top: 10px;
`;

export const GatheringMyTownComponentContainer = styled.div`
  width: 95%;
  height: 95%;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(120px, 150px));
	grid-template-rows: repeat(2, minmax(120px, 150px));
  gap: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const GatheringMyTownComponent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  background-size: cover; 
  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;

  &::before {
    position: absolute;
    content: "";
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    border-radius: 8px;
    z-index: 5;
  }
`;

export const GatheringMyTownComponentTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-family: "Pretendard-Regular";
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
  z-index: 101;
  padding-bottom: 10px;
`;

export const GatheringMyTownPlus = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f3f2f0;
  border: none;

  &:hover {
    .mytown_plus {
      width: 70px;
      height: 70px;
      transition: all 0.3s;
    }

    transition: all 0.3s;
    background-color: #d6d6d6;
  }
`;

export const GatheringMyTownPlusIcon = styled.img`
  width: 50px;
  height: 50px;
`;