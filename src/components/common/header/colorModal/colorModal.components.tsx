import { 
  ColorModalContainer,
  ColorModalButtonContainer,
  ColorModalHeader,
  ColorModalChooseColor,
  ColorModalTitle,
  ColorModalDescription,
  ColorModalColor,
  ColorModalSvgContainer,
  ColorModalButton,
  ColorModalColorWapper,
  ColorModalColorNoneWapper,
  ColorModalColorChoosen,
} from "./colorModal.styles";

import { FC, useEffect, useState } from "react";

import LightMode from "../../../../assets/images/lightMode.svg";
import DarkMode from "../../../../assets/images/darkMode.svg";

interface SendMessageProps {
  handleModalClose: () => void;
}

const ColorModal: FC<SendMessageProps> = ({ handleModalClose }) => {
  const [currentColor, setCurrentColor] = useState<number>(0);

  const handleOnClickColor = (color: number) => {
    // set current color to useState
    setCurrentColor(color);

    // 
  };  
  return (
    <ColorModalContainer>
      {/* Header */}
      <ColorModalHeader>
        <ColorModalTitle>색상 테마 설정</ColorModalTitle>
        <ColorModalDescription>원하는 테마를 선택해보세요</ColorModalDescription>
      </ColorModalHeader>

      {/* Choose Color */}
      <ColorModalChooseColor>
        {/* Light */}
        {
          currentColor === 0 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "white"}}>
                <ColorModalSvgContainer src={LightMode} />
              </ColorModalColorChoosen>
            </ColorModalColorWapper>
          ) : (
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(0)} style={{backgroundColor: "white"}}>
                <ColorModalSvgContainer src={LightMode} />
              </ColorModalColor>
            </ColorModalColorNoneWapper>
          )
        }

        {/* Dark */}
        {
          currentColor === 1 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "black"}}>
                <ColorModalSvgContainer src={DarkMode} />
              </ColorModalColorChoosen>
            </ColorModalColorWapper>
          ) : (
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(1)} style={{backgroundColor: "black"}}>
                <ColorModalSvgContainer src={DarkMode} />
              </ColorModalColor>
            </ColorModalColorNoneWapper>
          )
        }

        {/* Pink */}
        {
          currentColor === 2 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "#FFC3CE"}} />
            </ColorModalColorWapper>
          ) : (
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(2)} style={{backgroundColor: "#FFC3CE"}} />
            </ColorModalColorNoneWapper>
          )
        }

        {/* Yellow */}
        {
          currentColor === 3 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "#FFFAB4"}} />
            </ColorModalColorWapper>
          ) : (
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(3)} style={{backgroundColor: "#FFFAB4"}} />
            </ColorModalColorNoneWapper>
          )
        }

        {/* Green */}
        {
          currentColor === 4 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "#90E582"}} />
            </ColorModalColorWapper>
          ) : (
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(4)} style={{backgroundColor: "#90E582"}} />
            </ColorModalColorNoneWapper>
          )
        }
      
        {/* Blue */}
        {
          currentColor === 5 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "#6DC5F8"}} />
            </ColorModalColorWapper>
          ) : ( 
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(5)} style={{backgroundColor: "#6DC5F8"}} />
            </ColorModalColorNoneWapper>
          )
        }

        {/* Purple */}
        {
          currentColor === 6 ? (
            <ColorModalColorWapper>
              <ColorModalColorChoosen style={{backgroundColor: "#B99AE8"}} />
            </ColorModalColorWapper>
          ) : (
            <ColorModalColorNoneWapper>
              <ColorModalColor onClick={() => handleOnClickColor(6)} style={{backgroundColor: "#B99AE8"}} />
            </ColorModalColorNoneWapper>
          )
        }

      </ColorModalChooseColor>

      {/* Create */}
      <ColorModalButtonContainer>
        <ColorModalButton onClick={handleModalClose}>완료</ColorModalButton>
      </ColorModalButtonContainer>
    </ColorModalContainer>
  );
};

export default ColorModal;
