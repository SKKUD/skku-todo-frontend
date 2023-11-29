import styled from "@emotion/styled";

export const GatheringMemberContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  background: var(--white, #FCFCFC);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  /* &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  } */

`;

export const GatheringMemberTitle = styled.p`
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

export const GatheringMemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(30px, 50px));
  grid-template-rows: repeat(1, minmax(45px, 75px));
  gap: 12px;
  margin-top: 10px;
`;

export const GatheringMemberComponentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GatheringMemberComponentsContent = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: black;
  background-size: cover; 
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const GatheringMemberComponentsTitle = styled.div`
  margin-top: 3px;
  width: 100%;
  height: 20%;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  display: flex;
  justify-content: center;
`;

export const GatheringMemberPlusButton = styled.button`
  width: 100%;
  min-height: 30px;
  max-height: 50px;
  
  border-radius: 4px;
  background-color: #f3f2f0;
  border: none;

  &:hover {
    .GatheringMemberPlus {
      width: 20px;
      height: 20px;
      transition: all 0.3s;
    }

    transition: all 0.3s;
    background-color: #d6d6d6;
  }
`;

export const GatheringMemberPlusImg = styled.img`
  width: 15px;
  height: 15px;

`;