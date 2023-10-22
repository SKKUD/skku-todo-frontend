import styled from "@emotion/styled";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export const MainRightTodoContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: auto;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
`;

export const MainRightTodoContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const MainRightTodoContent = styled.div`
  width: 75%;
  color: var(--black, #2c2c2c);
  font-family: "Pretendard-Regular";
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MainRightTodoCheck = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 2px;
  border: 0.5px solid #b2b2b2;
  background: #ededed;
`;

export const MainRightTodoReaction = styled(InsertEmoticonIcon)`
  width: 24px;
  height: 24px;
  padding-right: 5px;
  &:hover {
    width: 32px;
    height: 32px;
    transition: all 0.3s;
  }
`;
