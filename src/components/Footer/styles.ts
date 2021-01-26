import styled from 'styled-components'

// src/components/Footer/index.js
export const FooterWrapper = styled.footer`
  width: 400px;
  background-color: #00000070;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }

    span {
      text-decoration: underline;
    }
  }
`