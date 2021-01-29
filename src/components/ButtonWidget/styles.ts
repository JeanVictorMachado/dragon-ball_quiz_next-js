import styled from 'styled-components'

import themeOne from 'styles/Themes/themeOne'

export const Wrapper = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${themeOne.colors.loading};
  box-shadow: 0 0 2px black;
  font-size: 14px;
  font-weight: 800;

  cursor: pointer;
  opacity: 1;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`

export const ButtonDisabled = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${themeOne.colors.disabled};
  box-shadow: 0 0 2px black;
  font-size: 14px;
  font-weight: 800;

  cursor: pointer;
  opacity: 1;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`
