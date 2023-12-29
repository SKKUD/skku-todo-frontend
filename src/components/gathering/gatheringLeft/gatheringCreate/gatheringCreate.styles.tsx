import styled from "@emotion/styled";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export const MakeGatheringContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  background: var(--white, #fcfcfc);
`;

// header
export const MakeGatheringHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const MakeGatheringHeaderTitle = styled.h1`
  color: var(--black, #2c2c2c);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
  margin: 0px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const MakeGatheringHeaderDescription = styled.p`
  color: var(--grey2, #8c8c8c);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0px;
`;

// make
export const MakeGatheringContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
`;

export const MakeGatheringThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MakeGatheringTitle = styled.p`
  color: var(--grey2, #8c8c8c);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px;
  margin-bottom: 5px;
`;

export const MakeGatheringThumbnail = styled.div`
  width: 134px;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 8px;
`;

export const MakeGatheringThumbnailSvg = styled.img`
  width: 134px;
  height: 134px;
`;

export const MakeGatheringThumbnailDefaultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const MakeGatheringThumbnailDefaultBox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  border: 0.5px solid var(--grey2, #8c8c8c);
`;

export const MakeGatheringThumbnailDefaultDescription = styled.p`
  color: var(--grey2, #8c8c8c);
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const MakeGatheringTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 10px;
`;

export const MakeGatheringLabel = styled.p`
  color: var(--grey2, #8c8c8c);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px;
`;

export const MakeGatheringTextArea = styled(TextareaAutosize)`
  width: 384px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--grey3, #b2b2b2);
  background-color: var(--white, #fcfcfc);
  resize: none;
  color: black;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// create button
export const MakeGatheringButton = styled.button`
  width: 227px;
  height: 55px;
  border: none;
  border-radius: 8px;
  background: var(--main, #00dda8);
  color: var(--white, #fcfcfc);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 40px;
`;

export const MakeGatheringRoutineWrapper = styled.div`
  width: 81%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MakeGatheringRoutineAddBtn = styled.button`
  width: 70px;
  height: 27px;
  background-color: #b2b2b2;
  color: var(--white, #fcfcfc);
  text-align: center;
  font-family: "Pretendard";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
  border: none;
  :hover {
    background-color: #8b8b8b;
  }
`;

export const MakeGatheringRoutineTextArea = styled(TextareaAutosize)`
  width: 89%;
  border: none;
  background-color: transparent;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;
`;

export const MakeGatheringRoutineContainer = styled.div`
  width: 81%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const MakeGatheringBtn = styled.button`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  background: var(--main, #00dda8);
  color: #fff;
  text-align: center;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  border: none;
`;

export const MakeGatheringTodoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 81%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--grey3, #b2b2b2);
  background-color: var(--white, #fcfcfc);
  color: var(--grey2, #8c8c8c);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: space-between;
`;

export const GatheringTodoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
