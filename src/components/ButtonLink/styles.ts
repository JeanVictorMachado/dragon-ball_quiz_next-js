import styled from 'styled-components'

import themeOne from 'styles/Themes/themeOne'

export const Wrapper = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  background-color: ${themeOne.colors.secondary};
  box-shadow: 0 0 2px black;
  font-size: 14px;
  color: white;

  cursor: pointer;
  opacity: 1;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`
