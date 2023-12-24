import React, { useState } from "react";

import { GatheringContainer } from "./Gathering.styles";

import GatheringLeft from "../../components/gathering/gatheringLeft/gatheringLeft.components";
import GatheringRight from "../../components/gathering/gatheringRight/gatheringRight.components";

const ArrayGathering = [
  {
    GatheringName: "스꾸디 2팀",
    GatheringGoal: "투두타운",
    GatheringManager: "강유진",
    Towner: ["안준성", "강유진", "누군가", "아무개", "그리고", "너도?"],
  },
  {
    GatheringName: "운동모임",
    GatheringGoal: "3대 500",
    GatheringManager: "안준성",
    Towner: [
      "운동",
      "벤치",
      "데드",
      "하하",
      "그리고",
      "너도?",
      "모임사당",
      "사당",
      "홍대",
      "뭐용",
      "개발",
      "싫어",
    ],
  },
  {
    GatheringName: "모임모임",
    GatheringGoal: "모임을 위한 공간",
    GatheringManager: "사당",
    Towner: [
      "모임사당",
      "사당",
      "홍대",
      "뭐용",
      "개발",
      "싫어",
      "모임사당",
      "사당",
      "홍대",
      "뭐용",
      "개발",
      "싫어",
      "모임사당",
      "사당",
      "홍대",
      "뭐용",
      "개발",
      "싫어",
    ],
  },
];

const Gathering = () => {
  const [leftWhichGathering, setLeftWhichGathering] = useState<number>(-1);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAbout, setIsAbout] = useState(true);
  const [isCreateLink, setIsCreateLink] = useState(false);
  return (
    <GatheringContainer>
      <GatheringLeft
        data={ArrayGathering}
        leftWhichGathering={leftWhichGathering}
        isCreate={isCreate}
        setIsCreate={setIsCreate}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        isAbout={isAbout}
        setIsAbout={setIsAbout}
        isCreateLink={isCreateLink}
        setIsCreateLink={setIsCreateLink}
      />
      <GatheringRight
        data={ArrayGathering}
        setLeftWhichGathering={setLeftWhichGathering}
        isCreate={isCreate}
        setIsCreate={setIsCreate}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        isAbout={isAbout}
        setIsAbout={setIsAbout}
      />
    </GatheringContainer>
  );
};

export default Gathering;
