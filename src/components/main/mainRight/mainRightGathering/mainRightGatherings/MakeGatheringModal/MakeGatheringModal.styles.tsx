import styled from "@emotion/styled";

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export const MakeGatheringContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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
  color: var(--black, #2C2C2C);
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

export const MakeGatheringThumbnailTitle = styled.p`
  color: var(--grey2, #8C8C8C);
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
  background-color: #FCFCFC;
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
  border: 0.5px solid var(--grey2, #8C8C8C);
`;

export const MakeGatheringThumbnailDefaultDescription = styled.p`
  color: var(--grey2, #8C8C8C);
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
`

export const MakeGatheringLabel = styled.p`
  color: var(--grey2, #8C8C8C);
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
  border: 1px solid var(--grey3, #B2B2B2);
  background-color: var(--white, #FCFCFC);
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
  background: var(--main, #00DDA8);
  color: var(--white, #FCFCFC);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 40px;
`;
