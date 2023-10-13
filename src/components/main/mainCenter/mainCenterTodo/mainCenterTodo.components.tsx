import React, { useState } from "react";
import { ChangeEvent } from "react";

import { 
  MainCenterTodoContainer,
  MainCenterTodoCheckBox,
  MainCenterTodoContent,
  MainCenterTodoContentEdit,
  MainCenterTodoCheckBoxChecked,
  MainCenterTodoButtonContainer,
  MainCenterTodoIconContainer,
  MainCenterTodoEditIcon,
  MainCenterTodoCheckIcon,
  MainCenterTodoDeleteIcon
} from "./mainCenterTodo.styles";

// assets
import Check from "../../../../assets/images/check.svg";
import EditIcon from '@mui/icons-material/Edit'; // edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // delete icon
import CheckIcon from '@mui/icons-material/Check'; // check icon

interface IMainCenterTodo {
  goalID: string,
  todoID: string,
  todoContent: string,
}

const MainCenterTodo = ({goalID, todoID, todoContent}: IMainCenterTodo) => {
  const [currentTodo, setCurrentTodo] = useState<string>(todoContent);
  const [check, setCheck] = useState<boolean>(false)
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
    setEditMode(false);

  };

  const handleOnClickDelete = () => {

  };

  const handleOnChangeTodo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <MainCenterTodoContainer className="todo_hover_point">
      {/* check box point */}
      {
        check ? (
          <MainCenterTodoCheckBoxChecked onClick={handleNotCheck}/>
        ) : (
          <MainCenterTodoCheckBox onClick={handleCheck}/>
        )
      }
      
      {/* todo content show */}
      {
        editMode ? (
          <MainCenterTodoContentEdit onChange={handleOnChangeTodo} value={currentTodo} />
        ) : (
          <MainCenterTodoContent>{currentTodo}</MainCenterTodoContent>
        )
      }

      {/* todo button (edit, delete) */}
      <MainCenterTodoButtonContainer className="todo_function_container">
        {
          editMode ? (
            <MainCenterTodoCheckIcon onClick={handleOnClickCheck} />
          ) : (
            <MainCenterTodoEditIcon onClick={handleOnClickEdit} />
          )
        }
        <MainCenterTodoDeleteIcon onClick={handleOnClickDelete} />
      </MainCenterTodoButtonContainer>
    </MainCenterTodoContainer>
  )
}

export default MainCenterTodo;