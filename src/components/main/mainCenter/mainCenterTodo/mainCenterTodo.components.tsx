import React, { useState } from "react";
import { ChangeEvent } from "react";

import {
  MainCenterTodoContainer,
  MainCenterTodoCheckBox,
  MainCenterTodoContent,
  MainCenterTodoContentEdit,
  MainCenterTodoCheckBoxChecked,
  MainCenterTodoButtonContainer,
  MainCenterTodoEditIcon,
  MainCenterTodoCheckIcon,
  MainCenterTodoDeleteIcon,
} from "./mainCenterTodo.styles";

// assets
import Check from "../../../../assets/images/check.svg";
import EditIcon from "@mui/icons-material/Edit"; // edit icon
import DeleteIcon from "@mui/icons-material/Delete"; // delete icon
import CheckIcon from "@mui/icons-material/Check"; // check icon
import dummy from "../../../../utils/data/dummy.json";
import Routine from "../../../../assets/images/Vector.svg";

interface IRoutine {
  routineDay?: string[] | undefined | null;
  routineEndDate?: string | undefined | null;
}

interface IMainCenterTodo {
  goalID: string;
  todoID: string;
  todoContent: string;
  routine?: IRoutine;
}

const MainCenterTodo = ({
  goalID,
  todoID,
  todoContent,
  routine,
}: IMainCenterTodo) => {
  console.log("todoID", todoID, todoContent, "routine", routine);
  const [currentTodo, setCurrentTodo] = useState<string>(todoContent);
  const [check, setCheck] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  // handle function
  const handleCheck = () => {
    setCheck(!check);
  };

  const handleNotCheck = () => {
    setCheck(!check);
  };

  const handleOnClickEdit = () => {
    setEditMode(true);
  };

  const handleOnClickCheck = () => {
    // save it to db or local test
    // const targetGoal = dummy.todoDummy.find((element) => element.goalID === goalID);
    // const targetTodo = targetGoal?.todo.find((element) => element.todoID === todoID);
    // console.log(targetTodo);
    // console.log(currentTodo);
    // targetTodo!.todo = currentTodo;

    // set edit mode false
    setEditMode(false);
  };

  const handleOnClickDelete = () => {
    // add delete logic
  };

  const handleOnChangeTodo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <MainCenterTodoContainer className="todo_hover_point">
      {/* check box point */}
      {check ? (
        <MainCenterTodoCheckBoxChecked onClick={handleNotCheck} />
      ) : (
        <MainCenterTodoCheckBox onClick={handleCheck} />
      )}
      {/* todo content show */}
      {editMode ? (
        <MainCenterTodoContentEdit
          onChange={handleOnChangeTodo}
          value={currentTodo}
        />
      ) : routine?.routineDay?.length !== 0 ? (
        <>
          <img src={Routine} />
          <MainCenterTodoContent>{currentTodo}</MainCenterTodoContent>
        </>
      ) : (
        <MainCenterTodoContent>{currentTodo}</MainCenterTodoContent>
      )}
      {/* todo button (edit, delete) */}
      <MainCenterTodoButtonContainer className="todo_function_container">
        {editMode ? (
          <MainCenterTodoCheckIcon onClick={handleOnClickCheck} />
        ) : (
          <MainCenterTodoEditIcon onClick={handleOnClickEdit} />
        )}
        <MainCenterTodoDeleteIcon onClick={handleOnClickDelete} />
      </MainCenterTodoButtonContainer>
    </MainCenterTodoContainer>
  );
};

export default MainCenterTodo;
