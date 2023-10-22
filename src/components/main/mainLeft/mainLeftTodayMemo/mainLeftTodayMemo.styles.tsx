import styled from "@emotion/styled";

export const MainLeftTodayMemoContainer = styled.div`
  width: 100%;
  height: 320px;
  padding-top: 20px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainLeftTodayMemoDate = styled.div`
  width: 95%;
  height: 40px;
  font-family: "Pretendard-Regular";
  text-align: center;
  color: var(--grey1, #5F5F5F);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const MainLeftTodayMemoContent = styled.textarea`
  width: 95%;
  height: 243px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: "Pretendard-Regular";
  border: none;
  resize: none;
  background-color: #F3F2F0;
  border-radius: 5px;
  padding: 10px;
`

export const MainLeftTodayMemoSizeWrapper = styled.div`
  width: 95%;
  margin-left: 10px;
  margin-top: -45px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`