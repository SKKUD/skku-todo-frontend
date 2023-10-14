import React from "react";

// import styled components
import { 
  MainLeftProfileContainer,
  MainLeftProfilePhoto,
  MainLeftProfileHello,
} from "./mainLeftProfile.styles";

// import photo for testing
import profile from "../../../../assets/images/profile.jpeg";

const MainLeftProfile = () => {
  return (
    <MainLeftProfileContainer>
      <MainLeftProfilePhoto src={profile} />
      <MainLeftProfileHello>안녕하세요 강유진님!</MainLeftProfileHello>
    </MainLeftProfileContainer>
  )
}

export default MainLeftProfile;