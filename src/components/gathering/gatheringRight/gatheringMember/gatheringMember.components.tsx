import React from "react";

import { 
  GatheringMemberContainer, 
} from "./gatheringMember.styles";

import { useRef } from "react";

const GatheringMember = () => {
  const MemberRef = useRef(null);

  return (
    <GatheringMemberContainer ref={MemberRef}>
      
    </GatheringMemberContainer>
  )
};

export default GatheringMember;