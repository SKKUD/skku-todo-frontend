import styled from "@emotion/styled";

export const ColorModalContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  background: var(--background, #f5f5f5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ColorModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-top: 10px;
`;

export const ColorModalTitle = styled.h1`
  color: var(--black, #2C2C2C);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
  margin: 0px;
`;

export const ColorModalDescription = styled.p`
  color: var(--grey2, #8C8C8C);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0px;
`;

export const ColorModalChooseColor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  max-width: 588px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid var(--background, #EBEAE5);
  margin-bottom: 20px;
`;

export const ColorModalColorWapper = styled.div`
  height: 52px;
  width: 52px;
  border: 2px solid #00AE65;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorModalColorNoneWapper = styled.div`
  height: 52px;
  width: 52px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorModalColorChoosen = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  border: 1px solid #B2B2B2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorModalColor = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #B2B2B2;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    height: 49px;
    width: 49px;
    transition: all 0.2s;
  }
`;

export const ColorModalSvgContainer = styled.img`
  width: 15px;
  height: 15px;
`;

export const ColorModalButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorModalButton = styled.button`
  width: 227px;
  height: 55px;
  color: var(--white, #FCFCFC);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border: none;
  border-radius: 8px;
  background: var(--main, #00DDA8);
`