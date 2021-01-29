import styled from 'styled-components'

export const Container = styled.section`
  width: 400px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 0;

  border-radius: 10px;
  box-shadow: 0 0 10px black;

  @media (max-width: 1100px) {
  }

  @media (max-width: 450px) {
    width: 370px;
  }

  @media (max-width: 400px) {
    width: 340px;
  }

  @media (max-width: 300px) {
    width: 270px;
  }
`

export const Content = styled.section`
  padding: 30px;
  color: white;

  > h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.playButton};
  }

  > p {
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    width: 340px;

    > h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 300px) {
    width: 270px;

    > h2 {
    }
  }
`

export const Form = styled.form``
