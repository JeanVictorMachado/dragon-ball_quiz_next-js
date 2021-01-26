import styled from 'styled-components'

export const Container = styled.section`
  width: 400px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  padding-bottom: 30px;

  border-radius: 10px;
  box-shadow: 0 0 10px black;
`

export const Content = styled.section`
  padding: 0 30px;

  > h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: white;
  }

  > p {
    color: white;
    font-size: 16px;
    opacity: 0.8;
    margin-bottom: 10px;
  }

  @media (max-width: 300px) {
    width: 270px;

    > h2 {
      font-size: 14px;
    }
  }
`
