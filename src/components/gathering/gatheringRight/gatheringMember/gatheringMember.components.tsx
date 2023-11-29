import React from "react";

import { 
  GatheringMemberContainer, 
  GatheringMemberComponentsContainer,
  GatheringMemberComponentsContent,
  GatheringMemberComponentsTitle,
  GatheringMemberTitle,
  GatheringMemberGrid,
  GatheringMemberPlusButton,
  GatheringMemberPlusImg,
} from "./gatheringMember.styles";

import GatheringImage from "../../../../assets/images/profile.jpeg";
import PlusImg from "../../../../assets/images/plus.svg";

const TownerMembers = ["김XX", "아XX", "신XX", "안XX", "정XX", "모XX", "세글자", "이름임", "신이XX"];

const GatheringMember = () => {
  
  return (
    <GatheringMemberContainer>
      <GatheringMemberTitle>towner</GatheringMemberTitle>
      <GatheringMemberGrid>
        {
          TownerMembers.map((name) => {
            return (
              <GatheringMemberComponentsContainer>
                <GatheringMemberComponentsContent style={{backgroundImage: `url(${GatheringImage})`}} />
                <GatheringMemberComponentsTitle>
                  {name}
                </GatheringMemberComponentsTitle>
              </GatheringMemberComponentsContainer>
            );
          })
        }
        <GatheringMemberPlusButton>
          <GatheringMemberPlusImg className="GatheringMemberPlus" src={PlusImg} />
        </GatheringMemberPlusButton>
      </GatheringMemberGrid>
    </GatheringMemberContainer>
  )
};

export default GatheringMember;