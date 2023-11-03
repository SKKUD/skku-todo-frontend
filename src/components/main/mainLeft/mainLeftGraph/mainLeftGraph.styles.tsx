import styled from "@emotion/styled";

export const MainLeftSubProfileContainer = styled.div<{backgroundColor: string}>`
  width: 100%;
  height: 208px;
  background-color: ${props => props.backgroundColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainLeftSubProfileContent = styled.div`
  width: 174px;
  height: 174px;
  border-radius: 50%;
  background: var(--back1, #F3F2F0);`