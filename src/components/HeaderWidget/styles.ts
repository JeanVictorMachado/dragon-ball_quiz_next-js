import styled from 'styled-components'

import themeOne from 'styles/Themes/themeOne'

import { WrapperHeader } from 'types/types'

export const Wrapper = styled.header<WrapperHeader>`
  height: 50px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  margin-bottom: ${(props) => (props.currentRoute ? '0' : '20px')};
  background-color: ${themeOne.colors.tertiary};
  font-size: 20px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
    text-shadow: 0 0 5px black;
  }
`
