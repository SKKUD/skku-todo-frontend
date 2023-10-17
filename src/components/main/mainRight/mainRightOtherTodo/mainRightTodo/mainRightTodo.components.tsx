import React from "react";
import { useState } from "react";

import {
  MainRightTodoContent,
  MainRightTodoContentContainer,
  MainRightTodoContainer,
  MainRightTodoCheck,
  MainRightTodoReaction,
} from "./mainRightTodo.styles";

import { 
  MainCenterTodoCheckBox,
  MainCenterTodoCheckBoxChecked,
} from "../../../mainCenter/mainCenterTodo/mainCenterTodo.styles";

import ModalLayout from "../../../../common/modalLayout/ModalLayout.components";
import ReactionModal from "./ReactionModal/ReactionModal.components";

interface IMainRightTodo {
  // isChecked?: boolean;
  content: string;
}

const MainRightTodo = ({content}: IMainRightTodo) => {
  // theme modal
  const [modalOpen, setModalOpen] = useState(false);

  // modal function
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <MainRightTodoContainer>
      {/* todo content */}
      <MainRightTodoContentContainer>
        <MainCenterTodoCheckBox />
        <MainRightTodoContent>{content}</MainRightTodoContent>
      </MainRightTodoContentContainer>

      {/* Reaction */}
      <MainRightTodoReaction onClick={handleModalOpen}/>

      {/* Modal */}
      <ModalLayout modalOpen={modalOpen} handleModalClose={handleModalClose}>
        <ReactionModal handleModalClose={handleModalClose} />
      </ModalLayout>
    </MainRightTodoContainer>
  );
};

export default MainRightTodo;
