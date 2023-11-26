import React, { useState } from "react";
import { ChangeEvent } from "react";

import {
  MainCenterMakeTodoContainer,
  MainCenterMakeTodoTextArea,
  MainCenterMakeTodoButton,
  MainCenterMakeRoutineButton,
} from "./mainCenterMakeTodo.styles";

import dummy from "../../../../utils/data/dummy.json";
import MainCenterMakeRoutine from "../mainCenterMakeRoutine/mainCenterMakeRoutine.components";

interface IMainCenterMakeTodo {
  makeTodo: boolean;
  setMakeTodo: React.Dispatch<React.SetStateAction<boolean>>;
  goalID: string;
  // makeRoutine: boolean;
  // setMakeRoutine: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainCenterMakeTodo = ({
  makeTodo,
  setMakeTodo,
  goalID,
}: // makeRoutine,
// setMakeRoutine,
IMainCenterMakeTodo) => {
  const [todoContent, setTodoContent] = useState<string>("");
  const [clickRoutine, setClickRoutine] = useState<boolean>(false);
  interface IRoutine {
    routineDay?: string[] | undefined | null;
    routineEndDate?: string | undefined | null;
  }

  const [routine, setRoutine] = useState<IRoutine>({
    routineDay: null,
    routineEndDate: null,
  });
  //const [makeRoutine, setMakeRoutine] = useState<boolean>(false);
  const handleOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoContent(event.target.value);
  };
  const targetGoal = dummy.todoDummy.find(
    (element) => element.goalID === goalID
  );

  const makeTodoID = goalID + "todo" + String(targetGoal!.todo.length + 1);
  const handleClickCheck = () => {
    // add new todo to db or local test

    // const targetGoal = dummy.todoDummy.find(
    //   (element) => element.goalID === goalID
    // );
    // const makeTodoID = goalID + "todo" + String(targetGoal!.todo.length + 1);

    console.log(todoContent);

    targetGoal!.todo.push({
      todoID: makeTodoID,
      todo: todoContent,
      routine: {
        routineDay: routine.routineDay!,
        routineEndDate: routine.routineEndDate!,
      },
    });
    // set make todo false
    setMakeTodo(false);
  };

  const handleClickRoutine = () => {
    setClickRoutine(true);
  };
  return (
    <>
      <MainCenterMakeTodoContainer>
        <MainCenterMakeTodoTextArea
          onChange={handleOnChangeTextArea}
          placeholder="새로운 목표를 입력하세요"
          value={todoContent}
        />
        <MainCenterMakeTodoButton onClick={handleClickCheck}>
          확인
        </MainCenterMakeTodoButton>
        {clickRoutine ? (
          ""
        ) : (
          <MainCenterMakeRoutineButton onClick={handleClickRoutine}>
            루틴
          </MainCenterMakeRoutineButton>
        )}
      </MainCenterMakeTodoContainer>
      {clickRoutine ? (
        <MainCenterMakeRoutine
          routine={routine}
          setRoutine={setRoutine}
          todoID={makeTodoID}
          goalID={goalID}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MainCenterMakeTodo;
