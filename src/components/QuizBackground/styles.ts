import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#1874cd, #104e8b, red);
  padding-bottom: 30px;

  display: flex;
  justify-content: space-around;
`

export const ConatinerLeft = styled.main`
  height: 100vh;
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
  height: 100vh;

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
