import React from "react";

import { 
  AlertContainer,
  AlertContent,
  AlertContentProfile,
  AlertContentText,
  AlertDate,
} from "./Alert.styles";

import profile from "../../../../../assets/images/profile.jpeg";

const Alert = () => {
  return (
    <AlertContainer>
      {/* profile */}
      <AlertContentProfile src={profile} />
      
      {/* Content */}
      <AlertContent>
        <AlertContentText>
          디자인학과 20학번 모입에 가입되었습니다.
        </AlertContentText>

        <AlertDate>
          2023년 10월 15일
        </AlertDate>
      </AlertContent>
      
    </AlertContainer>
  )
};

export default Alert;