import styled from "@emotion/styled";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const MainLeftCalendarContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`

export const CalendarHeaderMonth = styled.div`
  width: 84px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: var(--back1, #F3F2F0);
  color: var(--grey1, #5F5F5F);
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const CalendarHeaderNext = styled(ArrowForwardIosIcon)`
  width: 24px;
  height: 24px;
`;

export const CalendarHeaderPrevious = styled(ArrowBackIosNewIcon)`
  width: 24px;
  height: 24px;
`;


export const CalendarDaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`

export const CalendarDaysContent = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey1, #5F5F5F);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export const CalendarCellsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 20px;
`

export const CalendarCellRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const CalendarCell = styled.div`
  cursor: pointer;
  width: 37px;
  height: 37px;
  border-radius: 3px;
  background: var(--back1, #F3F2F0);
  color: var(--grey1, #5F5F5F);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;