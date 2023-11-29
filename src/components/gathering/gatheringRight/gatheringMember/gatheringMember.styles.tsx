import styled from "@emotion/styled";

export const GatheringMemberContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  background: var(--white, #FCFCFC);

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

