import React, { useState } from "react";
import { ChangeEvent } from "react";

import { 
  MainCenterMakeTodoContainer,
  MainCenterMakeTodoTextArea,
  MainCenterMakeTodoButton,
} from "./mainCenterMakeTodo.styles";

import dummy from "../../../../utils/data/dummy.json";

interface IMainCenterMakeTodo {
  makeTodo: boolean,
  setMakeTodo: React.Dispatch<React.SetStateAction<boolean>>;
  goalID: string,
}

const MainCenterMakeTodo = ({makeTodo, setMakeTodo, goalID}: IMainCenterMakeTodo) => {
  const [todoContent, setTodoContent] = useState<string>("");

  const handleOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoContent(event.target.value);
  };

  const handleClickCheck = () => {

    // add new todo to db or local test
    const targetGoal = dummy.todoDummy.find((element) => element.goalID === goalID);
    const makeTodoID = goalID + "todo" + String(targetGoal!.todo.length + 1);
    console.log(makeTodoID);
    console.log(todoContent);

    targetGoal!.todo.push({
      "todoID": makeTodoID,
      "todo": todoContent
    })

    // set make todo false
    setMakeTodo(false);
  }

  return (
    <MainCenterMakeTodoContainer>
      <MainCenterMakeTodoTextArea onChange={handleOnChangeTextArea} placeholder="새로운 목표를 입력하세요" value={todoContent}/>
      <MainCenterMakeTodoButton onClick={handleClickCheck}>확인</MainCenterMakeTodoButton>
    </MainCenterMakeTodoContainer>
  )
};

export default MainCenterMakeTodo;