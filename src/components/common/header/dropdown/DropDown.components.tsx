import React from "react";

import { 
  DropDownContainer,
  DropDownAlertContainer,
  DropDownAlert,
  DropDownAlertContent,
  DropDownAlertDate
} from "./DropDown.styles";

import Alert from "./Alert/Alert.components";

interface IDropDown {
  visibility: boolean;
}

const DropDown = ({visibility}: IDropDown) => {
  return (
    <DropDownContainer open={visibility}>
      <DropDownAlertContainer >
        <Alert />
        <Alert />
        <Alert />
      </DropDownAlertContainer>
    </DropDownContainer>
  );
};

export default DropDown;