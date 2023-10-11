import React, { useState } from "react";

import { 
  MainCenterTodoContainer,
  MainCenterTodoCheckBox,
  MainCenterTodoContent,
  MainCenterTodoCheckBoxChecked
} from "./mainCenterTodo.styles";

import Check from "../../../../assets/images/check.svg";

interface IMainCenterTodo {
  todoContent: string,
}

const MainCenterTodo = ({todoContent}: IMainCenterTodo) => {
  const [check, setCheck] = useState<boolean>(false)

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleNotCheck = () => {
    setCheck(!check);
  };

  return (
    <MainCenterTodoContainer>
      {
        check ? (
          <MainCenterTodoCheckBoxChecked onClick={handleNotCheck} src={Check}/>
        ) : (
          <MainCenterTodoCheckBox onClick={handleCheck}/>
        )
      }
      
      <MainCenterTodoContent>{todoContent}</MainCenterTodoContent>
    </MainCenterTodoContainer>
  )
}

export default MainCenterTodo;