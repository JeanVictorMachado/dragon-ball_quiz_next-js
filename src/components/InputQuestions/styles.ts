import styled from 'styled-components'

import themeOne from 'styles/Themes/themeOne'

type IWrapperProps = {
  borderColor: any
  onClick: any
}

export const Wrapper = styled.input<IWrapperProps>`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${themeOne.colors.secondary};
  box-shadow: 0 0 2px black;
  font-size: 14px;
  color: white;

  background-color: ${(props) => props.borderColor};

  cursor: pointer;
  opacity: 1;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`

export const QuestionCorrect = styled.input`
  border: 2px solid green;
`

export const QuestionIncorrect = styled.input`
  border: 2px solid red;
`
