import React, { useState } from "react";
import { ChangeEvent, MouseEvent } from "react";

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
  MainCenterTodoRoutineText,
} from "./mainCenterTodo.styles";

import { MainCenterMakeRoutineButton } from "../mainCenterMakeTodo/mainCenterMakeTodo.styles";
import MainCenterMakeRoutine from "../mainCenterMakeRoutine/mainCenterMakeRoutine.components";

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
  textColor: string;
  backgroundColor: string;
  lightBgColor: string;
  checkBgColor: string;
}

const MainCenterTodo = ({
  goalID,
  todoID,
  todoContent,
  routine,
  textColor,
  backgroundColor,
  lightBgColor,
  checkBgColor,
}: IMainCenterTodo) => {
  const [currentTodo, setCurrentTodo] = useState<string>(todoContent);
  const [check, setCheck] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [editRoutine, setEditRoutine] = useState<boolean>(false);
  const [newRoutine, setNewRoutine] = useState<IRoutine>({
    routineDay: routine?.routineDay,
    routineEndDate: routine?.routineEndDate,
  });

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
    setEditRoutine(false);
  };

  const handleOnClickDelete = () => {
    console.log("delete");
    console.log(dummy.todoDummy);
    console.log(goalID);
    dummy.todoDummy
      .find((element) => element.goalID === goalID)
      ?.todo.filter((element) => element.todoID !== todoID);
  };

  const handleEditRoutine = () => {
    setEditRoutine(!editRoutine);
  };
  const handleOnChangeTodo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTodo(event.target.value);
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <>
      <MainCenterTodoContainer
        className="todo_hover_point"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        lightBgColor={lightBgColor}
      >
        {/* check box point */}
        {check ? (
          <MainCenterTodoCheckBoxChecked
            onClick={handleNotCheck}
            checkBgColor={checkBgColor}
          />
        ) : (
          <MainCenterTodoCheckBox
            checkBgColor={checkBgColor}
            onClick={handleCheck}
          />
        )}
        {/* todo content show */}
        {editMode ? (
          <MainCenterTodoContentEdit
            onChange={handleOnChangeTodo}
            value={currentTodo}
          />
        ) : routine?.routineDay?.length !== 0 &&
          routine?.routineDay !== null ? (
          <>
            <img src={Routine} />
            <MainCenterTodoContent textColor={textColor}>
              {currentTodo}
            </MainCenterTodoContent>
          </>
        ) : (
          <MainCenterTodoContent textColor={textColor}>
            {currentTodo}
          </MainCenterTodoContent>
        )}
        {/* todo button (edit, delete) */}
        <MainCenterTodoButtonContainer className="todo_function_container">
          {isHover ? (
            editMode ? (
              <>
                <MainCenterTodoCheckIcon onClick={handleOnClickCheck} />
                <MainCenterTodoDeleteIcon
                  onClick={handleOnClickDelete}
                  themeColor={textColor}
                />
                <MainCenterMakeRoutineButton onClick={handleEditRoutine}>
                  루틴
                </MainCenterMakeRoutineButton>
              </>
            ) : (
              <>
                <MainCenterTodoEditIcon
                  onClick={handleOnClickEdit}
                  themeColor={textColor}
                />
                <MainCenterTodoDeleteIcon
                  onClick={handleOnClickDelete}
                  themeColor={textColor}
                />
              </>
            )
          ) : (
            <MainCenterTodoRoutineText>
              {routine?.routineDay?.toString()}
            </MainCenterTodoRoutineText>
          )}
        </MainCenterTodoButtonContainer>
      </MainCenterTodoContainer>
      {editRoutine ? (
        <MainCenterMakeRoutine
          routine={{
            routineDay: newRoutine?.routineDay,
            routineEndDate: newRoutine?.routineEndDate,
          }}
          setRoutine={setNewRoutine}
          todoID={todoID}
          goalID={goalID}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MainCenterTodo;
