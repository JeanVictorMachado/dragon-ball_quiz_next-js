import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.mainBg}
  );

  padding-bottom: 30px;

  display: flex;
  justify-content: space-around;

  @media (max-width: 1100px) {
    padding-top: 100px;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        ${({ theme }) => theme.colors.secondary} 21%,
        ${({ theme }) => theme.colors.secondary} 55%,
        ${({ theme }) => theme.colors.mainBg} 80%
      ),
      url(${({ theme }) => theme.bgImageMobile});
    background-size: 100%;
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

// export const BackgroundMobile = styled.div`
//   height: 200px;
//   width: 100%;
//   position: relative;
//   background-image: url('/img/imagem-dragon-ball-fundo-mobile.jpg');
//   background-size: cover;

//   @media (min-width: 1100px) {
//     display: none;
//   }
// `
