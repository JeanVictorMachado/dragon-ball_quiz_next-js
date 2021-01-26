import styled from 'styled-components'

import themeOne from 'styles/Themes/themeOne'

export const ContainerMain = styled.main`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    ${themeOne.colors.primary},
    ${themeOne.colors.secondary},
    ${themeOne.colors.tertiary}
  );

  padding-bottom: 30px;

  display: flex;
  justify-content: space-around;
`

export const ConatinerLeft = styled.main`
  margin-left: 11%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    margin-left: 0;
  }
`

export const ConatinerRight = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const ImgDragonBall = styled.img`
  height: 80vh;
`
