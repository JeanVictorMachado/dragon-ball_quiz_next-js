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

  @media (max-width: 1100px) {
    /* background-image: url('/img/imagem-dragon-ball-fundo-mobile.jpg');
    background-size: cover; */
    flex-direction: column;
  }
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

export const BackgroundMobile = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  background-image: url('/img/imagem-dragon-ball-fundo-mobile.jpg');
  background-size: cover;

  @media (min-width: 1100px) {
    display: none;
  }
`
