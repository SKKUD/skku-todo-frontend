import React from "react";

import { FC } from "react";

import { 
  ReactionContainer,
  ReactionHeader,
  ReactionHeaderTitle,
  ReactionHeaderContent,
  ReactionPointIcon,
  ReactionLimitContainer,
  ReactionLimit,
  ReactionLimitDescription,
  ReactionButton
} from "./ReactionModal.styles";
interface IReactionModal {
  handleModalClose: () => void;
}

const ReactionModal: FC<IReactionModal> = ({ handleModalClose })=> {
  return (
    <ReactionContainer>
      {/* Header */}
      <ReactionHeader>
        <ReactionHeaderTitle>
          찌르기
        </ReactionHeaderTitle>

        <ReactionHeaderContent>
          친구의 남은 할 일을 상기시켜보세요
        </ReactionHeaderContent>
      </ReactionHeader> 

      {/* Point */}
      <ReactionPointIcon>👈</ReactionPointIcon>

      {/* Limit */}
      <ReactionLimitContainer>
        <ReactionLimit>
          (하루 10회 제한)   
        </ReactionLimit>

        <ReactionLimitDescription>
        이 알림창은 최초 이용시에만 노출됩니다
        </ReactionLimitDescription>
      </ReactionLimitContainer>

      {/* button */}
      <ReactionButton onClick={handleModalClose}>
        확인
      </ReactionButton>
    </ReactionContainer>
  );
};

export default ReactionModal;