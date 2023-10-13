import React, { useState } from "react";

import { 
  MainCenterTodoContainer,
  MainCenterTodoCheckBox,
  MainCenterTodoContent,
  MainCenterTodoCheckBoxChecked,
  MainCenterTodoButtonContainer,
  MainCenterTodoIconContainer,
} from "./mainCenterTodo.styles";

// assets
import Check from "../../../../assets/images/check.svg";
import EditIcon from '@mui/icons-material/Edit'; // edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // delete icon
import CheckIcon from '@mui/icons-material/Check'; // check icon

interface IMainCenterTodo {
  todoContent: string,
}

const MainCenterTodo = ({todoContent}: IMainCenterTodo) => {
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
    console.log("click edit");
  };

  const handleOnClickCheck = () => {
    setEditMode(false);
    console.log("click check");
  };

  const handleOnClickDelete = () => {
    console.log("click ");
  };


  return (
    <MainCenterTodoContainer className="todo_hover_point">
      {
        check ? (
          <MainCenterTodoCheckBoxChecked onClick={handleNotCheck} src={Check}/>
        ) : (
          <MainCenterTodoCheckBox onClick={handleCheck}/>
        )
      }
      
      <MainCenterTodoContent>{todoContent}</MainCenterTodoContent>
      <MainCenterTodoButtonContainer className="todo_function_container">
        {
          editMode ? (
            <CheckIcon onClick={handleOnClickCheck} className="todo_edit" style={{width:"15px", height:"15px"}} />
          ) : (
            <EditIcon onClick={handleOnClickEdit} className="todo_edit" style={{width:"15px", height:"15px"}} />
          )
        }
        <DeleteIcon onClick={handleOnClickDelete} className="todo_delete "style={{width:"15px", height:"15px"}} />
      </MainCenterTodoButtonContainer>
    </MainCenterTodoContainer>
  )
}

export default MainCenterTodo;