import styled from "@emotion/styled";

export const GatheringMemberContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  background: var(--white, #FCFCFC);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
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
  grid-template-rows: repeat(2, minmax(40px, 50px));

`;

export const GatheringMemberComponentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GatheringMemberComponentsContent = styled.div`
  border-radius: 4px;
  background-color: black;
`;

export const GatheringMemberComponentsTitle = styled.div`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const GatheringMemberPlusButton = styled.button`
  border-radius: 8px;
  background-color: #f3f2f0;
  border: none;
`;
