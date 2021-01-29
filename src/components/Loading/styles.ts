import styled from 'styled-components'

import themeOne from 'styles/Themes/themeOne'

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    ${themeOne.colors.primary},
    ${themeOne.colors.secondary},
    ${themeOne.colors.tertiary}
  );

  @media (max-width: 1100px) {
    padding-top: 100px;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        ${themeOne.colors.secondary} 22%,
        ${themeOne.colors.secondary} 55%,
        ${themeOne.colors.tertiary} 90%
      ),
      url(/img/gif-1-dragon-ball.gif);
    background-repeat: repeat-x;
    background-size: 100%;
    flex-direction: column;
  }
`

export const Wrapper = styled.section`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > span {
    position: absolute;
    top: 75px;
    font-family: 'Lato';
    font-size: 20px;
    letter-spacing: 12px;
    color: ${themeOne.colors.playButton};
  }
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: ${themeOne.colors.tertiary};
  left: 15%;
  transform-origin: 50%;
  animation: circle 0.5s alternate infinite ease;

  @keyframes circle {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 45%;
    }
  }

  :nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`

export const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }

  :nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }
  :nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`
